import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserForm } from './Components/UserForm';
import { AirtableTest } from './Pages/AirtableTest';
import GraphTest from './Pages/GraphTest';
import SimulatorTest from './Pages/SimulatorTest';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UserForm}></Route>
          <Route exact path="/airtable" component={AirtableTest}></Route>
          <Route exact path="/graph" component={GraphTest}></Route>
          <Route exact path="/simulator" component={SimulatorTest}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
