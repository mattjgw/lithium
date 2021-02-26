// @flow

import * as React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import type { RecommendationPerformance } from "../lib/types"

export const SingleRecommendationGraph = (props: { data: RecommendationPerformance }): React.Node => {
  let { data } = props;

  return Object.entries(data).map(([k, v]) => {
    return <C3Chart
      data={{
        columns: [[k].concat(v)],
        type: "bar",
        color: (color, d) => [null, "red", "orange", "yellow", "green"][d.value]
      }}
      legend={{ show: false }}
      bar={{
        width: {
          ratio: 1
        }
      }}
      size={{
        height: 64,
      }}
    />
  })
}

export default SingleRecommendationGraph;