import type { Model, Outage, SimulatorResult } from './types'

export function simulate_outage(model: Model, outage: Outage): SimulatorResult {
  // debugger;
  let result = {
    peak_demand: 0,
    total_demand: 0
  }

  for (let minute = outage.start; minute < outage.end; minute++) {
    result.total_demand += model.total_demand[minute] / 60; // convert to watt-hours
    result.peak_demand = Math.max(result.peak_demand, model.total_demand[minute]);
  }

  return result;
}