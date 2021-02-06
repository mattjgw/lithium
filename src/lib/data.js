// @flow

export const DEVICE_NAMES: string[] = ["microwave", "refrigerator", "stove", "oven", "tv",
  "air conditioner", "hair dryer", "dishwasher", "clothes washer", "clothes dryer"]

export const DEVICE_DAILY_FREQ: { [string]: number } = {
  "microwave": 5,
  "refrigerator": 40,
  "stove": 1,
  "oven": 0.45,
  "tv": 1.62,
  "air conditioner": 1.5,
  "hair dryer": 1.5,
  "dishwasher": 1,
  "clothes washer": 0.36,
  "clothes dryer": 0.25,
}

export const DEVICE_CYCLE_LENGTH: { [string]: number } = {
  "microwave": 5,
  "refrigerator": 12,
  "stove": 12,
  "oven": 30,
  "tv": 90,
  "air conditioner": 120,
  "hair dryer": 7,
  "dishwasher": 75,
  "clothes washer": 55,
  "clothes dryer": 75,
}

export const DEVICE_WATTAGE: { [string]: number } = {
  "microwave": 1500,
  "refrigerator": 110,
  "stove": 2000,
  "oven": 3000,
  "tv": 105,
  "air conditioner": 1300,
  "hair dryer": 1600,
  "dishwasher": 1140,
  "clothes washer": 1200,
  "clothes dryer": 5000,
}

