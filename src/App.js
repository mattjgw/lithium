import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { blueGrey, green } from '@material-ui/core/colors';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { NotFoundPage } from './Pages/NotFoundPage';
import { RecommendationsPage } from './Pages/RecommendationsPage';
import { UserForm } from './Pages/UserForm';
import HomePage from './Pages/HomePage';

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: blueGrey[50],
      },
      secondary: {
        main: green[800],
      },
    },
    spacing: 8
  });

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/survey" component={UserForm}></Route>
            <Route path="/recommendations" component={RecommendationsPage}></Route>
            <Route path="/" component={NotFoundPage}></Route>
            {/* <Route path="/airtable" component={AirtableTest}></Route>
          <Route path="/graph" component={GraphTest}></Route>
          <Route path="/simulator" component={SimulatorTest}></Route>
          <Route path="/performance" component={PerformanceTest}></Route> */}
          </Switch>
        </HashRouter>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
