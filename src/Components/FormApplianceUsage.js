import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
    const { values, handleChange } = this.props;
    const { classes } = this.props;
    return (
      <Grid className={classes.shift}>

        <Typography className={classes.title}>Questionnaire</Typography>
        <Typography className={classes.subTitle}>Appliance Usage</Typography>

        {!!values.dishwasher &&
          <ApplianceUsageQuestion
            applianceName='dishwasher'
            applianceKey='dishwasherUsage'
            handleChange={handleChange}
            usage={values.dishwasherUsage}
          />
        }
        {!!values.stove &&
          <ApplianceUsageQuestion
            applianceName='stove'
            applianceKey='stoveUsage'
            handleChange={handleChange}
            usage={values.stoveUsage}
          />
        }
        {!!values.oven &&
          <ApplianceUsageQuestion
            applianceName='oven'
            applianceKey='ovenUsage'
            handleChange={handleChange}
            usage={values.ovenUsage}
          />
        }

        {!!values.washer &&
          <ApplianceUsageQuestion
            applianceName='washer'
            applianceKey='washerUsage'
            handleChange={handleChange}
            usage={values.washerUsage}
          />
        }
        {!!values.dryer &&
          <ApplianceUsageQuestion
            applianceName='dryer'
            applianceKey='dryerUsage'
            handleChange={handleChange}
            usage={values.dryerUsage}
          />
        }
        {!!values.ac &&
          <Typography className={classes.question}>In the summer, how many days a month do you use your air conditioner?</Typography>}

        {!!values.ac &&
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