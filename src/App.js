import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserForm } from './Components/UserForm';
import { AirtableTest } from './Pages/AirtableTest';
import AirtableUser from './Pages/AirtableUser';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UserForm}></Route>
          <Route exact path="/airtable" component={AirtableTest}></Route>
          <Route path="/airtable/:id" component={AirtableUser}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
