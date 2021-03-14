// @flow

import * as React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import type { RecommendationPerformance } from "../lib/types"

export const SingleRecommendationGraph = (props: { data: RecommendationPerformance }): React.Node => {
  let { data } = props;
  for (let k in data) {
    data[k].sort();
  }

  return Object.entries(data).map(([k, v]) => {
    return <C3Chart
      data={{
        columns: [[k].concat(v)],
        type: "bar",
        color: (color, d) => [null, "red", "orange", "yellow", "green"][d.value]
      }}
      tooltip={{
        format: {
          title: function (d) { return 'Result' },
          value: function (value, ratio, id) {
            return [
              "error",
              "Insufficient output and capacity",
              "Insufficient output",
              "Insufficient capacity",
              "Outage prevented"
            ][value]
          }
        }
      }}
      legend={{ show: false }}
      bar={{
        width: {
          ratio: 1
        }
      }}
      size={{
        height: 48,
      }}
      axis={{
        x: {
          show: false,
        },
        y: {
          show: false,
        }
      }}
      title={{
        text: k
      }}
    />
  })
}

export default SingleRecommendationGraph;