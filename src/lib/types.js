// @flow

export type Device = "dishwasher" |
  "stove" |
  "oven" |
  "washer" |
  "dryer" |
  "heat" |
  "ac" |
  "fridge" |
  "freezer" |
  "secondFridge" |
  "secondFreezer"

export type QuestionnaireResponse = {
  location: string,
  // used to identify outage patterns

  squareFootage: number,
  // square feet of house: used to estimate air conditioning
  // and heating usage (cycle length and frequency)

  monthlySummerUsage: number, // kWh per month
  monthlyWinterUsage: number, // kWh per month
  // used to scale total energy consumption

  dishwasher: boolean,
  stove: boolean,
  oven: boolean,
  washer: boolean,
  dryer: boolean,
  heat: boolean,
  ac: boolean,
  fridge: boolean,
  freezer: boolean,
  secondFridge: boolean,
  secondFreezer: boolean,
  // indicates whether the user owns each device,
  // leads to more detailed questions about usage

  dishwasherUsage: number,
  stoveUsage: number,
  ovenUsage: number,
  washerUsage: number,
  dryerUsage: number,
  // estimated cycles per week
  // used to scale the hourly probability of each cycle

  acUsage: number,
  // estimated days of air conditioning per month in the summer
}

export type ModelParams = {
  summer: boolean
}

export type Model = {
  total_demand: number[], // watts at a given point in time
  device_demand: { [Device]: number[] },
}

export type Outage = {
  start: number, // minutes after midnight
  end: number,
}

export type SimulatorResult = {
  peak_demand: number, // watts
  total_demand: number, // watt-hours
}