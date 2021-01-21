import Airtable from "airtable";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_AIRTABLE_KEY;

export const AirtableTest = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        var base = new Airtable({ apiKey: API_KEY }).base('appV6oQxcgRYsx3Wf');

        base('Recipes').select().all().then(result => {
            setRecords(result);
        })
    }, [])
    return <div>
        <h1>{API_KEY}</h1>
        <pre>{JSON.stringify(records, null, 2)}</pre>
    </div>
}

export default AirtableTest;