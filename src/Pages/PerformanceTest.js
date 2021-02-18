// @flow

import { Button } from '@material-ui/core';
import * as React from 'react';
import { useEffect, useState } from "react";
import PerformanceGraph from '../Components/PerformanceGraph';
import { generate_model, generate_timestamps } from '../lib/model';
import { simulate_outage } from '../lib/simulator';
import type { Model, Outage } from '../lib/types'

export const PerformanceTest = (): React.Node => {
  let [data, setData] = useState({});
  let [outages, setOutages] = useState({
    "6-6:15": {
      start: 360,
      end: 375,
    },
    "11:30-11:45": {
      start: 690,
      end: 705,
    },
    "20:45-21:00": {
      start: 1245,
      end: 1260,
    },
    "6-6:45": {
      start: 360,
      end: 405,
    },
    "11:30-12:15": {
      start: 690,
      end: 735,
    },
    "20:45-21:30": {
      start: 1245,
      end: 1290,
    },
    "6-9": {
      start: 360,
      end: 540,
    },
    "11:30-14:30": {
      start: 690,
      end: 870,
    },
    "20:45-23:45": {
      start: 1245,
      end: 1425,
    }
  });

  useEffect(() => {
    let models: Model[] = []; // generate ten models
    for (let i = 0; i < 10; i++) {
      console.log("generate model", i);
      models.push(generate_model({
        location: "Canada",
        squareFootage: 450,
        residents: 4,
        monthlySummerUsage: 600,
        monthlyWinterUsage: 800,
        dishwasher: true,
        stove: true,
        oven: true,
        washer: true,
        dryer: true,
        heat: true,
        ac: true,
        fridge: true,
        freezer: true,
        secondFridge: true,
        secondFreezer: true,
        dishwasherUsage: 2,
        stoveUsage: 2,
        ovenUsage: 2,
        washerUsage: 2,
        dryerUsage: 2,
        acUsage: 15,
        additionalDevices: [],
      }, { summer: true }));
    }

    let perf_data = {};
    for (let solution of [
      {
        name: "nothing",
        capacity: 0,
        peak_discharge: 0,
      },
      {
        name: "sonnen eco small",
        capacity: 5000,
        peak_discharge: 3000,
      },
      {
        name: "powerwall",
        capacity: 8000,
        peak_discharge: 5000,
      },
    ]) {
      perf_data[solution.name] = [];
      for (let [outage_name, outage] of Object.entries(outages)) {
        console.log(outage_name);
        let total = 0;
        for (let model of models) {
          console.log("test")
          let result = simulate_outage(model, outage);
          if (solution.capacity < result.total_demand || solution.peak_discharge < result.peak_demand) {
            total++;
          }
        }

        perf_data[solution.name].push(10 - total);
      }
    }

    setData(perf_data);
  }, [])

  return <>
    <h2>Outages prevented (out of 10) per solution and outage type</h2>
    <PerformanceGraph data={data} outages={Object.keys(outages)} /></>
}

export default PerformanceTest;