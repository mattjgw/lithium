import { simulate_outage } from './simulator';
import type { Model, Outage, RecommendationPerformance, SimulatorResult, StorageSolution } from './types'

export function assess_recommendation(
  rec: StorageSolution,
  models: Model[],
  outages: { [string]: number }): RecommendationPerformance {
  // Runs each outage type on each model. 
  // Returns the success or failure on each model for each outage.
  // Maps outage name to an array of results: 1 (red) for charge and capacity failure,
  // 2 (orange) for charge failure, 3 (yellow) for capacity failure, 4 (green) for all good

  let perf: RecommendationPerformance = {};
  for (let length of outages) {
    let name = "";
    if (length < 60) {
      name = `${length} minutes`;
    } else if (length < 120) {
      name = `1 hour` + (length % 60 === 0 ? "" : ` ${length % 60} minutes`);
    } else {
      name = `${Math.floor(length / 60)} hours` + (length % 60 === 0 ? "" : ` ${length % 60} minutes`);
    }

    perf[name] = [];
    for (let model of models) {
      // randomize start time
      let start_time = Math.floor(Math.random() * Math.floor(60 * 24 - length));
      let sim_result: SimulatorResult = simulate_outage(model, {
        start: start_time,
        end: start_time + length
      });

      if (sim_result.peak_demand > rec.peak_discharge && rec.capacity > 0 && sim_result.total_demand > rec.capacity) {
        perf[name].push(1);
      } else if (sim_result.peak_demand > rec.peak_discharge) {
        console.log(rec.peak_discharge);
        perf[name].push(2);
      } else if (sim_result.total_demand > rec.capacity && rec.capacity) {
        perf[name].push(3);
      } else {
        perf[name].push(4);
      }
    }
  }

  return perf;
}