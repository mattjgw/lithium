// @flow

import * as React from 'react';
import { useEffect, useState } from "react";
import { EXAMPLE_RESPONSE } from '../lib/data';
import { generate_model, get_devices } from '../lib/model';
import type { QuestionnaireResponse, ModelParams, Model } from '../lib/types';

export const SimulatorTest = (): React.Node => {
  let [done, setDone] = useState(false)
  useEffect(() => {
    // Generate 20 models
    let start = new Date();
    for (let i = 0; i < 20; i++) {
      let questionnaire: QuestionnaireResponse = EXAMPLE_RESPONSE;
      let params: ModelParams = { summer: true };
      let devices = get_devices(questionnaire, params)
      let daily_target_demand = (params.summer
        ? questionnaire.summerUsage
        : questionnaire.winterUsage)
        * 1000 // kWh to Wh
        / 30.5; // monthly -> daily
      let model: Model = generate_model(devices, daily_target_demand);
    }
    setDone(new Date().getTime() - start.getTime());
  }, [])

  return <div>{done}ms to generate 20 models</div>
}

export default SimulatorTest;