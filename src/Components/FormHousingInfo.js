import { Tooltip, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import HelpIcon from '@material-ui/icons/Help';
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
  },
};


export class FormPriority extends Component {
  continue = e => {
    e.preventDefault();
    if (this.props.values.location !== '' && this.props.values.squareFootage !== 0
      && this.props.values.numberOfPeopleInHousehold !== 0 && this.props.values.summerUsage !== 0
      && this.props.values.winterUsage !== 0) {
      this.props.nextStep();
    }
  };

  render() {
    const { handleChange, values } = this.props;
    const { classes } = this.props;
    return (
      <Grid className={classes.shift}>

        <Typography className={classes.title}>Questionnaire</Typography>
        <Typography className={classes.subTitle}>Housing Information</Typography>

        <Typography className={classes.question}>
          What province/territory do you live in?&nbsp;
          <Tooltip
            title="We'll use this information to estimate the types of power outages you're most likely to experience."
            placement="right" arrow>
            <HelpIcon fontSize="small" />
          </Tooltip>
        </Typography>
        <br />
        <FormControl>
          <InputLabel htmlFor="age-native-simple"></InputLabel>
          <Select
            native
            onChange={handleChange('location')}
            inputProps={{
              id: 'age-native-simple',
            }}
            value={values.location}
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

        <Typography className={classes.question}>
          What is the square footage of your home?&nbsp;
          <Tooltip
            title="If you're not sure, some estimates are about 500 sq. ft. for a studio apartment, 800 sq. ft. for a 1 bedroom apartment, and 1200 sq. ft. for a townhouse. Please include all living space, including basements!"
            placement="right" arrow>
            <HelpIcon fontSize="small" />
          </Tooltip>
        </Typography>
        <br />
        <TextField
          className={classes.textBox}
          type="number"
          placeholder="Square Footage"
          label="Square Footage"
          value={values.squareFootage}
          onChange={handleChange('squareFootage')}
          margin="normal"
          fullWidth
        />
        <br />

        <Typography className={classes.question}>
          How many people live in your home?&nbsp;
        </Typography>
        <br />
        <TextField
          className={classes.textBox}
          type="number"
          placeholder="Size of household"
          label="Size of household"
          value={values.numberOfPeopleInHousehold}
          onChange={handleChange('numberOfPeopleInHousehold')}
          margin="normal"
          fullWidth
        />
        <br />

        <Typography className={classes.question}>
          What is your average monthly power usage during the summer (kWh)?&nbsp;
          {/*See https://energyrates.ca/residential-electricity-natural-gas/ for reference*/}
          <Tooltip title="You can find this information on a recent power bill. For context,
           the average Ontario household using about 800 kWh of electricity per month." placement="right" arrow><HelpIcon fontSize="small" /></Tooltip>
        </Typography>

        <br />
        <TextField
          className={classes.textBox}
          type="number"
          placeholder="Monthly usage"
          label="Monthly usage"
          value={values.summerUsage}
          onChange={handleChange('summerUsage')}
          margin="normal"
          fullWidth
        />
        <br />

        <Typography className={classes.question}>
          What is your average monthly power usage during the winter (kWh)?&nbsp;
          <Tooltip title="You can find this information on a recent power bill. For context,
           the average Ontario household using about 800 kWh of electricity per month." placement="right" arrow><HelpIcon fontSize="small" /></Tooltip>
        </Typography>
        <br />
        <TextField
          className={classes.textBox}
          type="number"
          placeholder="Monthly usage"
          label="Monthly usage"
          value={values.winterUsage}
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