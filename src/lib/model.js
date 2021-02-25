// @flow

import { DEVICE_CYCLE_LENGTH, DEVICE_DAILY_FREQ, DEVICE_NAMES, DEVICE_WATTAGE } from "./data";
import type { QuestionnaireResponse, Model, ModelParams, DeviceDefinition } from './types'

// parses questionnaire and params into a list of devices to simulate
// result should be passed to generate_model
export function get_devices(questionnaire: QuestionnaireResponse, params: ModelParams): DeviceDefinition[] {
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

  // lights
  for (let i = 0; i < questionnaire.residents; i++) {
    devices.push({
      name: `lights${i}`,
      freq: 6,
      cycle_length: 1,
      wattage: questionnaire.efficientLights ? 20 : 100,
      pattern: null,
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

// generates a demand model over the course of a day
export function generate_model(devices: DeviceDefinition[], daily_target_demand: number): Model {
  // Number of ticks to use
  let minutes = 60 * 24;

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
