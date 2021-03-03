// @flow

import type { Device, QuestionnaireResponse, StorageSolution } from './types';

// defined devices that we know the duty cycle and wattages of
export const DEVICE_NAMES: Device[] = ["dishwasher", "stove", "oven", "washer",
  "dryer", "heat", "ac", "fridge", "freezer"]

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
}

export const HOURLY_PATTERNS = {
  "meals": [
    0.01, 0.005, 0.005, 0.005, 0.005, 0.01,
    0.03, 0.06, 0.07, 0.06, 0.04, 0.075,
    0.08, 0.07, 0.06, 0.02, 0.03, 0.05,
    0.08, 0.1, 0.08, 0.04, 0.01, 0.005
  ],
}

export const OUTAGES = {
  "short": 15,
  "medium": 60,
  "long": 180
}

export const EXAMPLE_RESPONSE: QuestionnaireResponse = {
  "location": "ON",
  "squareFootage": 1000,
  "numberOfPeopleInHousehold": 4,
  "summerUsage": 1500,
  "winterUsage": 1200,
  "dishwasher": 1,
  "stove": 1,
  "oven": 0,
  "fridge": 1,
  "freezer": 0,
  "washer": 0,
  "dryer": 0,
  "heat": 1,
  "ac": 0,
  "dishwasherUsage": 3,
  "stoveUsage": 1,
  "ovenUsage": 0,
  "washerUsage": 0,
  "dryerUsage": 0,
  "acUsage": 0,
  "windowOrCentral": 0,
  "windowUnits": 0,
  "eeBulbs": true,
  "additionalDevices": []
}

export const STORAGE_DEVICES: { [string]: StorageSolution[] } = {
  "Tesla": [
    {
      name: "Powerwall",
      capacity: 13500,
      peak_discharge: 5800,
    },
  ],
  "Orison": [
    {
      name: "Panel",
      capacity: 2200,
      peak_discharge: 1800,
    }
  ],
  "LG Chem": [
    {
      name: "RESU7H",
      capacity: 6600,
      peak_discharge: 5000,
    },
    {
      name: "RESU10H",
      capacity: 9300,
      peak_discharge: 5000,
    }
  ]
}