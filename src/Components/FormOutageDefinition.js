import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

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
    height: 40,
    fontFamily: "sans-serif",
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10
  },
  textBox: {
    width: 300
  },
  options: {
    height: 140,
  },
  shift: {
    marginLeft: 20,
    marginTop: 20
  },
};


export class FormOutageDefinition extends Component {
  continue = e => {
    e.preventDefault();
    if (this.props.values.priority !== '') {
      this.props.nextStep();
    }
  };

  render() {
    const { handleChange, values } = this.props;
    const { classes } = this.props;
    return (
      <Grid className={classes.shift}>

        <Typography className={classes.title}>Questionnaire</Typography>
        <Typography className={classes.subTitle}>Outage Definition</Typography>

        <Typography className={classes.question}>Which of these statements applies most to you?</Typography>

        <RadioGroup className={classes.options} aria-label="priority" color="inherit" name="priority" value={values.priority} onChange={handleChange('priority')}>
            <FormControlLabel 
                value='1'
                control={<Radio />} 
                label="I'd like to avoid the inconvenience of minor power outages: 
                it's important to me that my appliances and devices have a continuous source of power." />
            <FormControlLabel 
                value='2'
                control={<Radio />} 
                label="I experience regular extended power outages 
                and want a solution that will keep my home up and running throughout the day." />
            <FormControlLabel 
                value='3'
                control={<Radio />} 
                label="I need to ensure that I have sufficient power to weather a storm 
                or natural disaster, getting me through a worst-case scenario." />
        </RadioGroup>

        <Button
          color="secondary"
          variant="contained"
          onClick={this.continue}
        >Continue</Button>
      </Grid>
    );
  }
}

export default withStyles(styles)(FormOutageDefinition);