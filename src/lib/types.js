// @flow

export type QuestionnaireResponse = {
  location: string,
  // used to identify outage patterns

  squareFootage: number,
  // square feet of house: used to estimate air conditioning
  // and heating usage (cycle length and frequency)

  monthlySummerUsage: number, // kWh per month
  monthlyWinterUsage: number, // kWh per month
  // used to scale 

  dishwasher: boolean,
  stove: boolean,
  oven: boolean,
  fridge: boolean,
  freezer: boolean,
  washerDryer: boolean,
  heat: boolean,
  ac: boolean,
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
  // estimated days of air conditioning per month
  // in the summer
}