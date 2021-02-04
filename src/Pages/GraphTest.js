// @flow

import * as React from 'react';
import { useEffect, useState } from "react";
import UsageGraph from '../Components/UsageGraph';
import { generate_model, generate_timestamps } from '../lib/model';

export const GraphTest = (): React.Node => {
  let [data, setData] = useState([])
  let [axis, setAxis] = useState([])

  useEffect(() => {
    setData(generate_model());
    setAxis(generate_timestamps());
  }, [])

  return <UsageGraph data={data} axis={axis} />
}

export default GraphTest;