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
    fontWeight: 'bold',
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
    height: 60,
    width: 300
  },
  options: {
    height: 90,
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
            <Typography className={classes.question}>How many times is your dishwasher used each week?</Typography>
            }

            {values.dishwasher &&
            <TextField
              className={classes.textBox}
              placeholder="Weekly usage"
              onChange={handleChange('dishwasherUsage')}
              margin="normal"
              fullWidth
            />
            }

            {values.stove && 
            <Typography className={classes.question}>How many times is your stove used each week?</Typography>}
            
            {values.stove && 
            <TextField
              className={classes.textBox}
              placeholder="Weekly usage"
              onChange={handleChange('stoveUsage')}
              margin="normal"
              fullWidth
            />
            }

            {values.oven && 
            <Typography className={classes.question}>How many times is your oven used each week?</Typography>}
            
            {values.oven && 
            <TextField
              className={classes.textBox}
              placeholder="Weekly usage"
              onChange={handleChange('ovenUsage')}
              margin="normal"
              fullWidth
            />
            }

            {values.fridge && 
            <Typography className={classes.question}>Do you have a second fridge?</Typography>}
            
            {values.fridge && 
            <RadioGroup className={classes.options} aria-label="priority" color="inherit" name="priority" value={values.secondFridge} onChange={handleChange('secondFridge')}>
                <FormControlLabel value="1" control={<Radio />} label="Yes" />
                <FormControlLabel value="2" control={<Radio />} label="No" />
            </RadioGroup>
            }

             {values.freezer && 
            <Typography className={classes.question}>Do you have a second freezer?</Typography>}
            
            {values.freezer && 
            <RadioGroup className={classes.options} aria-label="priority" color="inherit" name="priority" value={values.secondFreezer} onChange={handleChange('secondFreezer')}>
                <FormControlLabel value="1" control={<Radio />} label="Yes" />
                <FormControlLabel value="2" control={<Radio />} label="No" />
            </RadioGroup>
            }

            {values.washerDryer && 
            <Typography className={classes.question}>How many times is your washer used each week?</Typography>}

            {values.washerDryer && 
            <TextField
              className={classes.textBox}
              placeholder="Weekly usage"
              onChange={handleChange('washerUsage')}
              margin="normal"
              fullWidth
            />
            }

            {values.washerDryer && 
            <Typography className={classes.question}>How many times is your dryer used each week?</Typography>}

            {values.washerDryer && 
            <TextField
              className={classes.textBox}
              placeholder="Weekly usage"
              onChange={handleChange('dryerUsage')}
              margin="normal"
              fullWidth
            />
            }

            {values.ac && 
            <Typography className={classes.question}>In the summer, how many days a month do you use your air conditioner?</Typography>}

            {values.ac && 
            <TextField
                className={classes.textBox}
                placeholder="Days per month"
                onChange={handleChange('acUsage')}
                margin="normal"
                fullWidth
            />
            }

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