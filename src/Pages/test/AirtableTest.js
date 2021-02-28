// @flow

import Airtable from "airtable";
import React from 'react';
import { useEffect, useState } from "react";
const API_KEY: string = process.env.REACT_APP_AIRTABLE_KEY || "";

export const AirtableTest = (): React$Element<"div"> => {
  const [records: Array< { [key: string]: any } >, setRecords: (Array<{ [key: string]: any }>) => void] = useState([]);

useEffect(() => {
  var base = new Airtable({ apiKey: API_KEY }).base('appV6oQxcgRYsx3Wf');

  base('Recipes')
    .select()
    .all()
    .then((result: Array<{ [key: string]: any }>): void => {
      setRecords(result);
    })
}, [])
return <div>
  <h1>{API_KEY}</h1>
  <pre>{JSON.stringify(records, null, 2)}</pre>
</div>
}

export default AirtableTest;