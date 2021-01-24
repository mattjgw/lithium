import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserForm } from './Components/UserForm';
import { AirtableTest } from './Pages/AirtableTest';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UserForm}></Route>
          <Route exact path="/airtable" component={AirtableTest}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
