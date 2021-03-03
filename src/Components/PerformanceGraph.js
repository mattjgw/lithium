// @flow

import 'c3/c3.css';
import * as React from 'react';
import C3Chart from 'react-c3js';

export const PerformanceGraph = (props: { data: { [string]: number[] }, outages: string[] }): React.Node => {
  let { data, outages } = props;

  let cols = Object.entries(data).map(([solution, result]) => [solution].concat(result))

  return (
    <C3Chart
      data={{
        columns: cols,
        type: "bar",
      }}
      axis={{
        x: {
          label: {
            text: "Outage time period",
            position: "outer-center",
          },
          type: "category",
          categories: outages
        },
        y: {
          label: {
            text: "Outages prevented",
            position: "outer-center",
          }
        }
      }}
      bar={{
        width: {
          ratio: 0.5
        }
      }}
    />
  )

}

export default PerformanceGraph;