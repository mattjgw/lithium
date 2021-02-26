// @flow

import { Button } from '@material-ui/core';
import * as React from 'react';
import { useEffect, useState } from "react";
import UsageGraph from '../Components/UsageGraph';
import { generate_model, generate_timestamps, get_devices } from '../lib/model';
import { simulate_outage } from '../lib/simulator';
import type { Model, ModelParams, QuestionnaireResponse } from '../lib/types'

export const GraphTest = (): React.Node => {
  let [totalDemand: { [string]: number[]}, setTotalDemand] = useState({});
  let [deviceDemand: { [string]: number[]}, setDeviceDemand] = useState({});
  let [axis, setAxis] = useState([]);
  let [showDevices, setShowDevices] = useState(false);

  useEffect(() => {
    let questionnaire: QuestionnaireResponse = {
      location: "Canada",
      squareFootage: 450,
      residents: 4,
      efficientLights: true,
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
    }
    let params: ModelParams = { summer: true };
    let devices = get_devices(questionnaire, params)
    let daily_target_demand = (params.summer
      ? questionnaire.monthlySummerUsage
      : questionnaire.monthlyWinterUsage)
      * 1000 // kWh to Wh
      / 30.5; // monthly -> daily
    let model: Model = generate_model(devices, daily_target_demand);

    setTotalDemand({ total: model.total_demand });
    setDeviceDemand(model.device_demand);
    setAxis(generate_timestamps());

    console.log(simulate_outage(model, { start: 60, end: 120 }));
  }, [])

  if (showDevices) {
    return <div key="show">
      <UsageGraph data={deviceDemand} axis={axis} />
      <Button variant="contained" onClick={() => setShowDevices(false)}>Hide devices</Button>
    </div>
  } else {
    return <div key="hide">
      <UsageGraph data={totalDemand} axis={axis} />
      <Button variant="contained" onClick={() => setShowDevices(true)}>Show devices</Button>
    </div>
  }
}

export default GraphTest;