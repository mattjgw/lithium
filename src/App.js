import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { UserForm } from './Pages/UserForm';
import { NotFoundPage } from './Pages/NotFoundPage';
// import AirtableTest from './Pages/AirtableTest';
// import GraphTest from './Pages/GraphTest';
// import PerformanceTest from './Pages/PerformanceTest';
// import SimulatorTest from './Pages/SimulatorTest';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={UserForm}></Route>
          <Route path="/" component={NotFoundPage}></Route>
          {/* <Route path="/airtable" component={AirtableTest}></Route>
          <Route path="/graph" component={GraphTest}></Route>
          <Route path="/simulator" component={SimulatorTest}></Route>
          <Route path="/performance" component={PerformanceTest}></Route> */}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
