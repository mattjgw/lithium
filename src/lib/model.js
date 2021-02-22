// @flow

import { DEVICE_CYCLE_LENGTH, DEVICE_DAILY_FREQ, DEVICE_NAMES, DEVICE_WATTAGE } from "./data";
import type { QuestionnaireResponse, Model, ModelParams, DeviceDefinition } from './types'

function get_devices(questionnaire: QuestionnaireResponse, params: ModelParams): DeviceDefinition[] {
  let devices = [...questionnaire.additionalDevices];

  for (let name of DEVICE_NAMES) {
    // special cases
    if (name === "ac" && !params.summer) {
      continue;
    } else if (name === "heat" && params.summer) {
      continue;
    }

    devices.push({
      name: name,
      freq: DEVICE_DAILY_FREQ[name],
      cycle_length: DEVICE_CYCLE_LENGTH[name],
      wattage: DEVICE_WATTAGE[name],
      pattern: null
    })
  }

  return devices;
}

function init_device_cycles(devices: DeviceDefinition[]): { [string]: number } {
  let device_cycles = {};
  for (let device of devices) {
    device_cycles[device.name] = 0;
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
  let device_demand: { [string]: number[] } = {};
  for (const device of devices) {
    device_demand[device.name] = [...total_demand];
  }

  // Track cycle progression for each device, indicates remaining ticks
  let device_cycles = init_device_cycles(devices);

  for (let i = 0; i < minutes; i++) {
    for (const device of devices) {
      if (device_cycles[device.name] > 0) {
        // Decrement cycle length and add wattage to demand
        device_cycles[device.name]--;

        total_demand[i] += device.wattage
        device_demand[device.name][i] += device.wattage
      } else {
        // Start a new cycle if random value is above threshold
        let threshold = device.freq / minutes;
        if (Math.random() < threshold) {
          device_cycles[device.name] = device.cycle_length
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

  // Scale values to match power bill
  let scaling_factor = daily_target_demand / daily_actual_demand;
  total_demand = total_demand.map((watts) => watts * scaling_factor);
  for (let device of devices) {
    device_demand[device.name] = device_demand[device.name].map((watts) => watts * scaling_factor)
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
