// @flow

import { DEVICE_CYCLE_LENGTH, DEVICE_DAILY_FREQ, DEVICE_NAMES, DEVICE_WATTAGE } from "./data";
import type { QuestionnaireResponse, Device, Model } from './types'

function get_devices(questionnaire: QuestionnaireResponse): Device[] {
  return DEVICE_NAMES.filter(device => questionnaire[device])
}

function init_device_cycles(devices: Device[]): { [Device]: number } {
  let device_cycles = {};
  for (let device of devices) {
    device_cycles[device] = 0;
  }

  return device_cycles
}

export function generate_model(questionnaire: QuestionnaireResponse): Model {
  // Number of ticks to use
  let minutes = 60 * 24;

  // Relevant devices
  let devices = get_devices(questionnaire)

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

  return { total_demand, device_demand };
}

export function generate_timestamps(): number[] {
  let timestamps = [];
  for (let i = 0; i < 24 * 60; i++) {
    timestamps.push(i * 60 * 1000);
  }

  return timestamps;
}
