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
  "custom"

export type QuestionnaireResponse = {
  location: string,
  // used to identify outage patterns

  squareFootage: number,
  // square feet of house: used to estimate air conditioning
  // and heating usage (cycle length and frequency)

  numberOfPeopleInHousehold: number, // number of people who live in the house

  summerUsage: number, // kWh per month
  winterUsage: number, // kWh per month
  // used to scale total energy consumption

  dishwasher: number,
  stove: number,
  oven: number,
  washer: number,
  dryer: number,
  heat: number,
  ac: number,
  fridge: number,
  freezer: number,
  windowUnits: number,
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

  eeBulbs: boolean,
  // whether the user primarily has LED or halogen bulbs

  additionalDevices: DeviceDefinition[],
  priority: "short" | "medium" | "long",
}

export type ModelParams = {
  summer: boolean
}

export type Model = {
  total_demand: number[], // watts at a given point in time
  device_demand: { [string]: number[] },
}

export type Outage = {
  start: number, // minutes after midnight
  end: number,
}

export type SimulatorResult = {
  peak_demand: number, // watts
  total_demand: number, // watt-hours
}

export type DeviceDefinition = {
  name: string,
  freq: number, // cycles per day
  cycle_length: number, // length of cycle
  wattage: number, // nominal watts when turned on
  pattern: ?string
}

export type StorageSolution = {
  name: string,
  capacity: number, // watt-hours
  peak_discharge: number, // watts
  cost: number, // dollars
}

export type RecommendationPerformance = { [string]: number[] }
