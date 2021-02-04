// @flow

import * as React from 'react';
import { useEffect, useState } from "react";
import C3Chart from 'react-c3js';
import 'c3/c3.css';

export const UsageGraph = (props: { data: number[], axis: number[] }): React.Node => {
  let { data, axis } = props;
  let x_col = ['x'].concat(axis);
  let consumption_col = ['consumption'].concat(data);
  let ticks = [];
  for (let i = 0; i < 60 * 24; i += 60) {
    ticks.push(i * 1000 * 60);
  }

  return (
    <C3Chart
      data={{
        x: 'x',
        xFormat: '%H:%M:%S',
        columns: [x_col, consumption_col],
        types: {
          "consumption": "area"
        }
      }}
      point={{
        show: false
      }}
      axis={{
        x: {
          type: 'timeseries',
          localtime: false,
          tick: {
            values: ticks,
            format: "%H:%M",
          },
          padding: { left: 0 }
        },
        y: {
          min: 0,
          padding: 0,
        },
      }}
    />
  )

}

export default UsageGraph;