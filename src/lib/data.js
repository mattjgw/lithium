// @flow

import type { Device } from './types';

export const DEVICE_DAILY_FREQ: { [Device]: number } = {
  "dishwasher": 1,
  "stove": 1,
  "oven": 0.45,
  "washer": 0.36,
  "dryer": 0.25,
  "heat": 3,
  "ac": 1.5,
  "fridge": 40,
  "freezer": 5,
  "secondFridge": 40,
  "secondFreezer": 5,
  // "microwave": 5,
  // "tv": 1.62,
  // "hair dryer": 1.5,
}

export const DEVICE_CYCLE_LENGTH: { [Device]: number } = {
  "dishwasher": 75,
  "stove": 12,
  "oven": 30,
  "washer": 55,
  "dryer": 75,
  "heat": 15,
  "ac": 120,
  "fridge": 12,
  "freezer": 10,
  "secondFridge": 12,
  "secondFreezer": 10,
}

export const DEVICE_WATTAGE: { [Device]: number } = {
  "dishwasher": 1140,
  "stove": 2000,
  "oven": 3000,
  "washer": 1200,
  "dryer": 5000,
  "heat": 1000,
  "ac": 1300,
  "fridge": 110,
  "freezer": 150,
  "secondFridge": 90,
  "secondFreezer": 80,
}

