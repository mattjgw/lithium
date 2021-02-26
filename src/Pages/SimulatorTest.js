// @flow

import * as React from 'react';
import { useEffect, useState } from "react";
import { generate_model, get_devices } from '../lib/model';
import type { QuestionnaireResponse, ModelParams, Model } from '../lib/types';

export const SimulatorTest = (): React.Node => {
  let [done, setDone] = useState(false)
  useEffect(() => {
    // Generate 20 models
    let start = new Date();
    for (let i = 0; i < 20; i++) {
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
    }
    setDone(new Date().getTime() - start.getTime());
  }, [])

  return <div>{done}ms to generate 20 models</div>
}

export default SimulatorTest;