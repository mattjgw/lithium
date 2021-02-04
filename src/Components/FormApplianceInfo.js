import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TopBar from './TopBar';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';


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
    buttons: {
        marginTop: 60
  },
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
    height: 0,
    fontFamily: "sans-serif",
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20
  },
  textBox: {
    height: 120,
    width: 300
  },
  options: {
    height: 140,
  },
  shift: {
    marginLeft: 20,
    marginTop: 20
  },
  back: {
      marginTop: -10,
      marginRight: 10
  }
};


export class FormApplicanceInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme= {theme}> 
        <TopBar/>

        <Grid className={classes.shift}>

            <Typography className={classes.title}>Questionnaire</Typography>
            <Typography className={classes.subTitle}>Appliance Information</Typography>

            <Typography className={classes.question}>Which of the following appliances do you own?</Typography>
            
            <FormControlLabel
                control={
                <Checkbox
                    checked={values.dishwasher}
                    onChange={handleChange('dishwasher')}
                    color="secondary"
                />
                }
                label="Dishwasher"
            />
            <br />
            <FormControlLabel
                control={
                <Checkbox
                    checked={values.stove}
                    onChange={handleChange('stove')}
                    color="secondary"
                />
                }
                label="Electric Stove"
            />
             <br />
            <FormControlLabel
                control={
                <Checkbox
                    checked={values.oven}
                    onChange={handleChange('oven')}
                    color="secondary"
                />
                }
                label="Electric Oven"
            />
            <br />
            <FormControlLabel
                control={
                <Checkbox
                    checked={values.fridge}
                    onChange={handleChange('fridge')}
                    color="secondary"
                />
                }
                label="Refrigerator"
            />
            <br />
            <FormControlLabel
                control={
                <Checkbox
                    checked={values.freezer}
                    onChange={handleChange('freezer')}
                    color="secondary"
                />
                }
                label="Freezer"
            />
            <br />
            <FormControlLabel
                control={
                <Checkbox
                    checked={values.washerDryer}
                    onChange={handleChange('washerDryer')}
                    color="secondary"
                />
                }
                label="Washer/Dryer"
            />
             <br />
            <FormControlLabel
                control={
                <Checkbox
                    checked={values.ac}
                    onChange={handleChange('heat')}
                    color="secondary"
                />
                }
                label="Electric heating"
            />
            <br />
            <FormControlLabel
                control={
                <Checkbox
                    checked={values.ac}
                    onChange={handleChange('ac')}
                    color="secondary"
                />
                }
                label="Air Conditioning"
            />
            <br />

            <Grid>
                <Button
                    className={classes.back}
                    color="primary"
                    variant="contained"
                    onClick={this.back}
                >Back</Button>

                <Button
                color="secondary"
                variant="contained"
                onClick={this.continue}
                >Continue</Button>
            </Grid>

        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(FormApplicanceInfo);