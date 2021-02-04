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
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


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
    height: 20,
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
            <Typography className={classes.subTitle}>Appliance Usage</Typography>

            {values.dishwasher && 
            <Typography className={classes.question}>How often do you use your dishwasher?</Typography>
            }

            {values.dishwasher &&
            <RadioGroup className={classes.options} aria-label="priority" color="inherit" name="priority" value={values.dishWasherUsage} onChange={handleChange('dishWasherUsage')}>
                <FormControlLabel value="1" control={<Radio />} label="Often" />
                <FormControlLabel value="2" control={<Radio />} label="Sometimes" />
                <FormControlLabel value="3" control={<Radio />} label="Almost never" />
            </RadioGroup>
            }

            {values.stove && 
            <Typography className={classes.question}>How often do you use your stove?</Typography>}
            
            {values.stove && 
            <RadioGroup className={classes.options} aria-label="priority" color="inherit" name="priority" value={values.stoveUsage} onChange={handleChange('stoveUsage')}>
                <FormControlLabel value="1" control={<Radio />} label="Often" />
                <FormControlLabel value="2" control={<Radio />} label="Sometimes" />
                <FormControlLabel value="3" control={<Radio />} label="Almost never" />
            </RadioGroup>
            }

            {values.washerDryer && 
            <Typography className={classes.question}>How many loads of laundry do you do each week?</Typography>}

            {values.washerDryer && 
            <Typography className={classes.question}>How many loads of laundry do you do each week?</Typography>
            &&
            <RadioGroup className={classes.options} aria-label="priority" color="inherit" name="priority" value={values.washerUsage} onChange={handleChange('washerUsage')}>
                <FormControlLabel value="1" control={<Radio />} label="1-2" />
                <FormControlLabel value="2" control={<Radio />} label="3-5" />
                <FormControlLabel value="3" control={<Radio />} label="6+" />
            </RadioGroup>
            }

            {values.washerDryer && 
            <Typography className={classes.question}>How times do you use the dryer each week?</Typography>}

            {values.washerDryer && 
            <Typography className={classes.question}>How times do you use the dryer each week?</Typography>
            &&
            <RadioGroup className={classes.options} aria-label="priority" color="inherit" name="priority" value={values.dryerUsage} onChange={handleChange('dryerUsage')}>
                <FormControlLabel value="1" control={<Radio />} label="1-2" />
                <FormControlLabel value="2" control={<Radio />} label="3-5" />
                <FormControlLabel value="3" control={<Radio />} label="6+" />
            </RadioGroup>
            }

            {values.ac && 
            <Typography className={classes.question}>In the summer, how many days a month do you use your air conditioner?</Typography>}

            {values.ac && 
            <TextField
                className={classes.textBox}
                placeholder="Days per month"
                label="Days per month"
                onChange={handleChange('acUsage')}
                margin="normal"
                fullWidth
            />
            }

            <Grid>
                <Button
                    className={classes.back}
                    color="secondary"
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