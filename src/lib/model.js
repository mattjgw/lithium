// @flow

import * as data from "./data";

function generate_device_cycles(): { [string]: number } {
  let device_cycles = {};
  for (let device of data.device_names) {
    device_cycles[device] = 0;
  }

  return device_cycles
}

export function generate_model(): number[] {
  let minutes = 60 * 24;
  let energy_demand: number[] = Array(minutes).fill(0);

  let device_cycles = generate_device_cycles();

  for (let i = 0; i < minutes; i++) {
    for (const device in device_cycles) {
      if (device_cycles[device] > 0) {
        energy_demand[i] += data.device_wattage[device]
        device_cycles[device]--;
      } else {
        let threshold = data.device_daily_freq[device] / minutes;
        if (Math.random() < threshold) {
          device_cycles[device] = data.device_cycle_length[device]
        }
      }
    }
  }

  return energy_demand;
}

export function generate_timestamps(): number[] {
  let timestamps = [];
  for (let i = 0; i < 24 * 60; i++) {
    timestamps.push(i * 60 * 1000);
  }

  return timestamps;
}
