// @flow

import Airtable from "airtable";
import * as React from 'react';
import { useEffect, useState } from "react";
import C3Chart from 'react-c3js';
import 'c3/c3.css';

export const UsageGraph = (): React.Node => {
  return <C3Chart data={{
    x: 'x',
    //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
    columns: [
      ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
      //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 130, 340, 200, 500, 250, 350]
    ]
  }} axis={{
    x: {
      type: 'timeseries',
      tick: {
        format: '%Y-%m-%d'
      }
    }
  }} />

}

export default UsageGraph;