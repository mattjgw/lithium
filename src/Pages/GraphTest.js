// @flow

import * as React from 'react';
import { useEffect, useState } from "react";
import UsageGraph from '../Components/UsageGraph';
import { generate_model, generate_timestamps } from '../lib/model';

export const GraphTest = (): React.Node => {
  let [data, setData] = useState({});
  let [axis, setAxis] = useState([]);

  useEffect(() => {
    setData(generate_model({
      location: "Canada",
      squareFootage: 450,
      monthlySummerUsage: 100,
      monthlyWinterUsage: 80,
      dishwasher: true,
      stove: true,
      oven: true,
      washer: true,
      dryer: true,
      heat: true,
      ac: true,
      fridge: true,
      freezer: true,
      secondFridge: true,
      secondFreezer: true,
      dishwasherUsage: 2,
      stoveUsage: 2,
      ovenUsage: 2,
      washerUsage: 2,
      dryerUsage: 2,
      acUsage: 15,
    }));
    setAxis(generate_timestamps());
  }, [])

  return <UsageGraph data={data} axis={axis} />
}

export default GraphTest;