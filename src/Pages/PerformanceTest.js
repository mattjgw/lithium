// @flow
import * as React from 'react';
import { useEffect, useState } from "react";
import PerformanceGraph from '../Components/PerformanceGraph';
import SingleRecommendationGraph from '../Components/SingleRecommendationGraph';
import { OUTAGES } from '../lib/data';
import { generate_model, get_devices } from '../lib/model';
import { assess_recommendation } from '../lib/recommender';
import { simulate_outage } from '../lib/simulator';
import type { Model, ModelParams, QuestionnaireResponse } from '../lib/types'

export const PerformanceTest = (props: {
  location: {
    state: {
      response: QuestionnaireResponse
    }
  }
}): React.Node => {
  let { response } = props.location.state;
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
  let [recommendations, useRecommendations] = useState([
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
  ]);
  let [models, setModels] = useState(() => {
    let _models: Model[] = []; // generate ten models
    for (let i = 0; i < 90; i++) {
      let questionnaire: QuestionnaireResponse = response;
      let params: ModelParams = { summer: true };
      let devices = get_devices(questionnaire, params)
      let daily_target_demand = (params.summer
        ? questionnaire.summerUsage
        : questionnaire.winterUsage)
        * 1000
        / 30.5;
      _models.push(generate_model(devices, daily_target_demand));
    }
    return _models;
  })

  useEffect(() => {


    let perf_data = {};
    let rec_data = {};

    for (let rec of recommendations) {
      perf_data[rec.name] = [];

      for (let [outage_name, outage] of Object.entries(outages)) {
        let total = 0;
        for (let model of models) {
          let result = simulate_outage(model, outage);
          if (rec.capacity < result.total_demand || rec.peak_discharge < result.peak_demand) {
            total++;
          }
        }

        perf_data[rec.name].push(30 - total);
      }
    }

    setData(perf_data);
  }, [])

  return <>
    <h2>Outages prevented (out of 30) per recommendation and outage type</h2>
    <PerformanceGraph data={data} outages={Object.keys(outages)} />
    {recommendations.map(rec => <>
      <h3>Recommendation {rec.name}</h3>
      <SingleRecommendationGraph data={assess_recommendation(rec, models, OUTAGES)} />
    </>)}

  </>
}

export default PerformanceTest;