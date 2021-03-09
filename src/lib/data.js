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
  "heat": 4,
  "ac": 20,
  "fridge": 40,
  "freezer": 5,
}

export const DEVICE_CYCLE_LENGTH: { [Device]: number } = {
  "dishwasher": 75,
  "stove": 12,
  "oven": 30,
  "washer": 55,
  "dryer": 75,
  "heat": 30,
  "ac": 20,
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

export const DEVICE_PATTERNS = {
  "dishwasher": "meals",
  "stove": "meals",
  "oven": "meals",
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
  "short": [
    15,
    30,
    60,
  ],
  "medium": [
    30,
    120,
    360,
  ],
  "long": [
    120,
    360,
    1440,
  ]
}

export const EXAMPLE_RESPONSE: QuestionnaireResponse = {
  "location": "ON",
  "squareFootage": 1000,
  "numberOfPeopleInHousehold": 4,
  "summerUsage": 800,
  "winterUsage": 600,
  "dishwasher": 1,
  "stove": 1,
  "oven": 0,
  "fridge": 1,
  "freezer": 1,
  "washer": 1,
  "dryer": 1,
  "heat": 1,
  "ac": 0,
  "dishwasherUsage": 7,
  "stoveUsage": 20,
  "ovenUsage": 5,
  "washerUsage": 3,
  "dryerUsage": 2,
  "acUsage": 15,
  "windowOrCentral": 0,
  "windowUnits": 0,
  "eeBulbs": true,
  "additionalDevices": [],
  "priority": "short",
}

export const STORAGE_DEVICES: { [string]: StorageSolution[] } = {
  "Tesla": [
    {
      name: "Powerwall",
      type: "Home battery",
      capacity: 13500,
      peak_discharge: 5800,
      cost: 12000,
    },
    {
      name: "2x Powerwall",
      type: "Home battery",
      capacity: 13500 * 2,
      peak_discharge: 5800 * 2,
      cost: 12000 * 2,
    },
    {
      name: "3x Powerwall",
      type: "Home battery",
      capacity: 13500 * 3,
      peak_discharge: 5800 * 3,
      cost: 12000 * 3,
    },
    {
      name: "4x Powerwall",
      type: "Home battery",
      capacity: 13500 * 4,
      peak_discharge: 5800 * 4,
      cost: 12000 * 4,
    },
  ],
  "Orison": [
    {
      name: "Panel",
      type: "Home battery",
      capacity: 2200,
      peak_discharge: 1800,
      cost: 2200,
    },
    {
      name: "Panel and Panel+",
      type: "Home battery",
      capacity: 2200 * 2,
      peak_discharge: 1800 * 2,
      cost: 2200 + 1600,
    },
    {
      name: "Panel and 2x Panel+",
      type: "Home battery",
      capacity: 2200 * 3,
      peak_discharge: 1800 * 3,
      cost: 2200 + 1600 * 2,
    },
    {
      name: "Panel and 3x Panel+",
      type: "Home battery",
      capacity: 2200 * 4,
      peak_discharge: 1800 * 4,
      cost: 2200 + 1600 * 3,
    },
    {
      name: "Panel and 4x Panel+",
      type: "Home battery",
      capacity: 2200 * 5,
      peak_discharge: 1800 * 5,
      cost: 2200 + 1600 * 4,
    },
    {
      name: "Panel and 5x Panel+",
      type: "Home battery",
      capacity: 2200 * 6,
      peak_discharge: 1800 * 6,
      cost: 2200 + 1600 * 5,
    }
  ],
  "LG Chem": [
    {
      name: "RESU7H",
      type: "Home battery",
      capacity: 6600,
      peak_discharge: 5000,
      cost: 6260,

    },
    {
      name: "RESU10H",
      type: "Home battery",
      capacity: 9300,
      peak_discharge: 5000,
      cost: 8100,
    },
    {
      name: "2x RESU7H",
      type: "Home battery",
      capacity: 6600 * 2,
      peak_discharge: 5000 * 2,
      cost: 6260 * 2,
    },
    {
      name: "RESU7H + RESU10H",
      type: "Home battery",
      capacity: 6600 + 9300,
      peak_discharge: 5000 * 2,
      cost: 6260 + 8100,
    },
    {
      name: "2x RESU10H",
      type: "Home battery",
      capacity: 9300 * 2,
      peak_discharge: 5000 * 2,
      cost: 8100 * 2,
    },
    {
      name: "3x RESU10H",
      type: "Home battery",
      capacity: 9300 * 3,
      peak_discharge: 5000 * 3,
      cost: 8100 * 3,
    }
  ],
  "Generac": [
    {
      name: "Home Standby Generator",
      type: "Generator",
      capacity: 0,
      peak_discharge: 16000,
      cost: 5429,
    }
  ]
}