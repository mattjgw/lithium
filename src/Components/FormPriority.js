import React, { Component } from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TopBar from './TopBar';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';
import { Typography } from '@material-ui/core';

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

const styles = {
  title: {
    height: 80,
    fontFamily: "sans-serif",
    fontWeight: 50,
    fontSize: 32,
  },
  subTitle: {
    height: 60,
    fontFamily: "sans-serif",
    fontWeight: 30,
    fontSize: 24,
    color: '#2e7d32',
  },
  question: {
    height: 32,
    fontFamily: "sans-serif",
    fontWeight: 'bold',
    fontSize: 18,
  },
  options: {
    height: 140,
  }
};


export class FormPriority extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme= {theme}> 
        <TopBar/>

        <Typography className={classes.title}>Questionnaire</Typography>
        <Typography className={classes.subTitle}>Priorities</Typography>
        <Typography className={classes.question}>What is your priority for home energy setup?</Typography>

        <RadioGroup className={classes.options} aria-label="priority" color="inherit" name="priority" value={values.priority} onChange={handleChange('priority')}>
          <FormControlLabel value="1" control={<Radio />} label="Saving money" />
          <FormControlLabel value="2" control={<Radio />} label="Eliminating Outages" />
          <FormControlLabel value="3" control={<Radio />} label="Reducing environmental impact" />
        </RadioGroup>

        <Button
          color="primary"
          variant="contained"
          onClick={this.continue}
        >Continue</Button>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(FormPriority);