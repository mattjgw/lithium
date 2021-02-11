// @flow

import { DEVICE_CYCLE_LENGTH, DEVICE_DAILY_FREQ, DEVICE_NAMES, DEVICE_WATTAGE } from "./data";
import type { QuestionnaireResponse, Device, Model, ModelParams } from './types'

function get_devices(questionnaire: QuestionnaireResponse, params: ModelParams): Device[] {
  return DEVICE_NAMES.filter(device => (
    questionnaire[device] && ((device) => {
      // Special cases
      switch (device) {
        case "ac":
          return params.summer
        case "heat":
          return !params.summer
        default:
          return true
      }
    })(device)
  ))
}

function init_device_cycles(devices: Device[]): { [Device]: number } {
  let device_cycles = {};
  for (let device of devices) {
    device_cycles[device] = 0;
  }

  return device_cycles
}

export function generate_model(questionnaire: QuestionnaireResponse, params: ModelParams): Model {
  // Number of ticks to use
  let minutes = 60 * 24;

  // Relevant devices
  let devices = get_devices(questionnaire, params)

  // Total demand at each tick
  let total_demand: number[] = Array(minutes).fill(0);
  let device_demand: { [Device]: number[] } = {};
  for (const device of devices) {
    device_demand[device] = [...total_demand];
  }

  // Track cycle progression for each device, indicates remaining ticks
  let device_cycles = init_device_cycles(devices);

  for (let i = 0; i < minutes; i++) {
    for (const device of devices) {
      if (device_cycles[device] > 0) {
        // Decrement cycle length and add wattage to demand
        device_cycles[device]--;

        total_demand[i] += DEVICE_WATTAGE[device]
        device_demand[device][i] += DEVICE_WATTAGE[device]
      } else {
        // Start a new cycle if random value is above threshold
        let threshold = DEVICE_DAILY_FREQ[device] / minutes;
        if (Math.random() < threshold) {
          device_cycles[device] = DEVICE_CYCLE_LENGTH[device]
        }
      }
    }
  }

  // Scale demand to match actual amount
  let daily_target_demand = (params.summer
    ? questionnaire.monthlySummerUsage
    : questionnaire.monthlyWinterUsage)
    * 1000 // kWh to Wh
    / 30.5; // monthly -> daily

  // Divide by 60 to convert watt-minutes to watt-hours
  let daily_actual_demand = total_demand.reduce((a, b) => a + b, 0) / 60;
  let scaling_factor = daily_target_demand / daily_actual_demand;

  total_demand = total_demand.map((watts) => watts * scaling_factor);
  for (let device of devices) {
    device_demand[device] = device_demand[device].map((watts) => watts * scaling_factor)
  }


  return { total_demand, device_demand };
}

export function generate_timestamps(): number[] {
  let timestamps = [];
  for (let i = 0; i < 24 * 60; i++) {
    timestamps.push(i * 60 * 1000);
  }

  return timestamps;
}
