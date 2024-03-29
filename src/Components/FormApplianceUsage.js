import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import React, { Component } from 'react';
import ApplianceUsageQuestion from './ApplianceUsageQuestion';

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
    height: 70,
    width: 300,
    marginTop: -10
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
  },
  progressBar: {
    width: 600,
    marginBottom: 20
  },
};


export class FormApplianceUsage extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, progress } = this.props;
    const { classes } = this.props;
    return (
      <Grid className={classes.shift}>

        <Typography className={classes.title}>Questionnaire</Typography>
        <LinearProgress className={classes.progressBar} color='secondary' variant="determinate" value={progress} />
        <Typography className={classes.subTitle}>Appliance Usage</Typography>

        {!!values.dishwasher &&
          <ApplianceUsageQuestion
            applianceName='dishwasher'
            applianceKey='dishwasherUsage'
            quantity={values.dishwasher}
            handleChange={handleChange}
            usage={values.dishwasherUsage}
          />
        }
        {!!values.stove &&
          <ApplianceUsageQuestion
            applianceName='stove'
            applianceKey='stoveUsage'
            quantity={values.stove}
            handleChange={handleChange}
            usage={values.stoveUsage}
          />
        }
        {!!values.oven &&
          <ApplianceUsageQuestion
            applianceName='oven'
            applianceKey='ovenUsage'
            quantity={values.oven}
            handleChange={handleChange}
            usage={values.ovenUsage}
          />
        }

        {!!values.washer &&
          <Typography className={classes.question}>How many loads of laundry does your household wash in an average week?</Typography>
        }

        {!!values.washer &&
          <TextField
            id="standard-number"
            label="Number of uses"
            type="number"
            value={values.washerUsage}
            onChange={handleChange('washerUsage')}
            InputLabelProps={{
              shrink: true,
            }}
          />
        }
        <br />
        {!!values.dryer &&
          <ApplianceUsageQuestion
            applianceName='dryer'
            applianceKey='dryerUsage'
            quantity={values.dryer}
            handleChange={handleChange}
            usage={values.dryerUsage}
          />
        }
        <br />
        {!!values.ac &&
          <Typography className={classes.question}>In the summer, how many days a month do you use your air conditioner?</Typography>}

        {!!values.ac &&
          <TextField
            className={classes.textBox}
            placeholder="Days per month"
            label="Days per month"
            onChange={handleChange('acUsage')}
            margin="small"
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
    );
  }
}

export default withStyles(styles)(FormApplianceUsage);