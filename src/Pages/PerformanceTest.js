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

    for (let rec of recommendations) {
      perf_data[rec.name] = [];

      for (let [_, outage] of Object.entries(outages)) {
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
  }, [models, outages, recommendations])

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