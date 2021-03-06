import { simulate_outage } from './simulator';
import type { Model, Outage, RecommendationPerformance, SimulatorResult, StorageSolution } from './types'

export function assess_recommendation(
  rec: StorageSolution[],
  models: Model[],
  outages: { [string]: number }): RecommendationPerformance {
  // Runs each outage type on each model. 
  // Returns the success or failure on each model for each outage.
  // Maps outage name to an array of results: 1 (red) for charge and capacity failure,
  // 2 (orange) for charge failure, 3 (yellow) for capacity failure, 4 (green) for all good
  let capacity = rec.map(x => x.capacity).reduce((a, b) => a + b, 0)
  let peak_discharge = rec.map(x => x.peak_discharge).reduce((a, b) => a + b, 0)

  let perf: RecommendationPerformance = {};
  for (let length of outages) {
    let name = `${Math.floor(length / 60)}h ${length % 60}m`
    perf[name] = [];
    for (let model of models) {
      // randomize start time
      let start_time = Math.floor(Math.random() * Math.floor(60 * 24 - length));
      let sim_result: SimulatorResult = simulate_outage(model, {
        start: start_time,
        end: start_time + length
      });

      if (sim_result.peak_demand > peak_discharge && sim_result.total_demand > capacity) {
        perf[name].push(1);
      } else if (sim_result.peak_demand > peak_discharge) {
        perf[name].push(2);
      } else if (sim_result.total_demand > rec.capacity) {
        perf[name].push(3);
      } else {
        perf[name].push(4);
      }
    }
  }

  return perf;
}