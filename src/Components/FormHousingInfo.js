import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';

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
    height: 0,
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
  }
};


export class FormPriority extends Component {
  continue = e => {
    e.preventDefault();
    if(this.props.values.location !== '' && this.props.values.squareFootage !== 0 
    && this.props.values.numberOfPeopleInHousehold !== 0 && this.props.values.summerUsage !== 0 
    && this.props.values.winterUsage !== 0 ){
      this.props.nextStep();
    }
  };

  render() {
    const { handleChange } = this.props;
    const { classes } = this.props;
    return (
      <Grid className={classes.shift}>

        <Typography className={classes.title}>Questionnaire</Typography>
        <Typography className={classes.subTitle}>Housing Information</Typography>

        <Typography className={classes.question}>What province/territory do you live in?</Typography>
        <br />
        <FormControl>
          <InputLabel htmlFor="age-native-simple"></InputLabel>
          <Select
            native
            onChange={handleChange('location')}
            inputProps={{
              id: 'age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={'ON'}>Ontario</option>
            <option value={'QC'}>Quebec</option>
            <option value={'MB'}>Manitoba</option>
            <option value={'SK'}>Saskatchewan</option>
            <option value={'AB'}>Alberta</option>
            <option value={'BC'}>British Columbia</option>
            <option value={'NL'}>Newfoundland and Labrador</option>
            <option value={'NS'}>Nova Scotia</option>
            <option value={'NB'}>New Brunswick</option>
            <option value={'PE'}>Prince Edward Island</option>
            <option value={'NU'}>Nunavut</option>
            <option value={'NT'}>Northwest Territories</option>
            <option value={'YT'}>Yukon</option>

          </Select>
        </FormControl>
        <br />

        <Typography className={classes.question}>What is the square footage of your home?</Typography>
        <br />
        <TextField
          className={classes.textBox}
          placeholder="Square Footage"
          type='number'
          label="Square Footage"
          onChange={handleChange('squareFootage')}
          margin="normal"
          fullWidth
        />
        <br />

        <Typography className={classes.question}>How many people live in your home?</Typography>
        <br />
        <TextField
          className={classes.textBox}
          placeholder="Size of houshold"
          type='number'
          label="Size of houshold"
          onChange={handleChange('numberOfPeopleInHousehold')}
          margin="normal"
          fullWidth
        />
        <br />

        <Typography className={classes.question}>What is your average monthly power usage during the summer (kWh)?</Typography>
        <br />
        <TextField
          className={classes.textBox}
          placeholder="Monthly usage"
          type='number'
          label="Monthly usage"
          onChange={handleChange('summerUsage')}
          margin="normal"
          fullWidth
        />
        <br />

        <Typography className={classes.question}>What is your average monthly power usage during the winter (kWh)?</Typography>
        <br />
        <TextField
          className={classes.textBox}
          placeholder="Monthly usage"
          type='number'
          label="Monthly usage"
          onChange={handleChange('winterUsage')}
          margin="normal"
          fullWidth
        />
        <br />

        <Button
          color="secondary"
          variant="contained"
          onClick={this.continue}
        >Continue</Button>
      </Grid>
    );
  }
}

export default withStyles(styles)(FormPriority);