import Airtable from "airtable";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = process.env.REACT_APP_AIRTABLE_KEY;

export const AirtableUser = () => {
  let { id } = useParams();
  const [record, setRecord] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var base = new Airtable({ apiKey: API_KEY }).base('appiUhadCT5Z9UuuK');

    setLoading(true);
    base('questionnaire').find(id, (err, row) => {
      setLoading(false);
      if (err) {
        setError(err);
        setRecord(null);
      } else {
        setError(null);
        setRecord(row.fields);
      }
    })
  }, [id])

  let result = "not found";
  if (loading) {
    result = "loading";
  } else {
    result = `id ${id}: ${JSON.stringify(record || error, null, 2)}`
  }

  return <div>
    <h1>{API_KEY}</h1>
    <pre>{result}</pre>
  </div>
}

export default AirtableUser;