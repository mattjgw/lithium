// @flow

import "./data";
import { DEVICE_CYCLE_LENGTH, DEVICE_DAILY_FREQ, DEVICE_WATTAGE } from "./data";
import type { QuestionnaireResponse, Device } from './types'

function get_devices(questionnaire: QuestionnaireResponse): Device[] {
  let devices: Device[] = [];
  if (questionnaire.dishwasher) {
    devices.push("dishwasher")
  } if (questionnaire.stove) {
    devices.push("stove")
  } if (questionnaire.oven) {
    devices.push("oven")
  } if (questionnaire.washer) {
    devices.push("washer")
  } if (questionnaire.dryer) {
    devices.push("dryer")
  } if (questionnaire.heat) {
    devices.push("heat")
  } if (questionnaire.ac) {
    devices.push("ac")
  } if (questionnaire.fridge) {
    devices.push("fridge")
  } if (questionnaire.freezer) {
    devices.push("freezer")
  } if (questionnaire.secondFridge) {
    devices.push("secondFridge")
  } if (questionnaire.secondFreezer) {
    devices.push("secondFreezer")
  }

  return devices;
}

function generate_device_cycles(devices: Device[]): { [Device]: number } {
  let device_cycles = {};
  for (let device of devices) {
    device_cycles[device] = 0;
  }

  return device_cycles
}

export function generate_model(questionnaire: QuestionnaireResponse): { [Device]: number[] } {
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

  let device_cycles = generate_device_cycles(devices);


  for (let i = 0; i < minutes; i++) {
    for (const device of devices) {
      if (device_cycles[device] > 0) {
        total_demand[i] += DEVICE_WATTAGE[device]
        device_demand[device][i] += DEVICE_WATTAGE[device]

        device_cycles[device]--;
      } else {
        let threshold = DEVICE_DAILY_FREQ[device] / minutes;
        if (Math.random() < threshold) {
          device_cycles[device] = DEVICE_CYCLE_LENGTH[device]
        }
      }
    }
  }

  return device_demand;
}

export function generate_timestamps(): number[] {
  let timestamps = [];
  for (let i = 0; i < 24 * 60; i++) {
    timestamps.push(i * 60 * 1000);
  }

  return timestamps;
}
