// @flow

import * as React from 'react';
import { useEffect, useState } from "react";
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import type { Device } from '../lib/types';

export const UsageGraph = (props: { data: { [any]: number[] }, axis: number[] }): React.Node => {
  let { data, axis } = props;

  let cols = [['x'].concat(axis)];

  for (const [device, usage] of Object.entries(data)) {
    cols.push([device].concat(usage));
  }

  let ticks = [];
  for (let i = 0; i < 60 * 24; i += 60) {
    ticks.push(i * 1000 * 60);
  }

  return (
    <C3Chart
      data={{
        x: 'x',
        xFormat: '%H:%M:%S',
        columns: cols,
        type: 'area',
        groups: [[...Object.keys(data)]],
        order: 'desc',
      }}
      interaction={{
        enabled: false
      }}
      transition={{
        duration: 0
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
            format: "%H",
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