import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import React, { Component } from 'react';

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
    height: 1000,
    marginLeft: 20,
    marginTop: 20
  },
  back: {
    marginTop: -10,
    marginRight: 10
  },
  quantity: {
    width: 40
  },
  windowOrCentral: {
    width: 150
  },
  progressBar: {
    width: 600,
    marginBottom: 20
  },
};


export class FormApplianceInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleCheckChange, handleFieldChange, progress } = this.props;
    const { classes } = this.props;
    return (
      <Grid className={classes.shift}>

        <Typography className={classes.title}>Questionnaire</Typography>
        <LinearProgress className={classes.progressBar} color='secondary' variant="determinate" value={progress} />
        <Typography className={classes.subTitle}>Appliance Information</Typography>

        <Typography className={classes.question}>Which of the following appliances do you own?</Typography>

        <FormControlLabel
          control={
            <Checkbox
              checked={values.dishwasher}
              onChange={handleCheckChange('dishwasher')}
              color="secondary"
            />
          }
          label="Dishwasher"
        />
        {!!values.dishwasher &&
          <TextField
            className={classes.quantity}
            InputProps={{ inputProps: { min: 0 } }}
            id="standard-number"
            label="Quantity"
            type="number"
            value={values.dishwasher}
            onChange={handleFieldChange('dishwasher')}
            InputLabelProps={{
              shrink: true,
            }}
          />}
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={values.stove}
              onChange={handleCheckChange('stove')}
              color="secondary"
            />
          }
          label="Electric Stove"
        />
        {!!values.stove &&
          <TextField
            className={classes.quantity}
            InputProps={{ inputProps: { min: 0 } }}
            id="standard-number"
            label="Quantity"
            type="number"
            value={values.stove}
            onChange={handleFieldChange('stove')}
            InputLabelProps={{
              shrink: true,
            }}
          />}
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={values.oven}
              onChange={handleCheckChange('oven')}
              color="secondary"
            />
          }
          label="Electric Oven"
        />
        {!!values.oven &&
          <TextField
            className={classes.quantity}
            InputProps={{ inputProps: { min: 0 } }}
            id="standard-number"
            label="Quantity"
            type="number"
            value={values.oven}
            onChange={handleFieldChange('oven')}
            InputLabelProps={{
              shrink: true,
            }}
          />}
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={values.fridge}
              onChange={handleCheckChange('fridge')}
              color="secondary"
            />
          }
          label="Refrigerator"
        />
        {!!values.fridge &&
          <TextField
            className={classes.quantity}
            InputProps={{ inputProps: { min: 0 } }}
            id="standard-number"
            label="Quantity"
            type="number"
            value={values.fridge}
            onChange={handleFieldChange('fridge')}
            InputLabelProps={{
              shrink: true,
            }}
          />}
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={values.freezer}
              onChange={handleCheckChange('freezer')}
              color="secondary"
            />
          }
          label="Separate freezer"
        />
        {!!values.freezer &&
          <TextField
            className={classes.quantity}
            InputProps={{ inputProps: { min: 0 } }}
            id="standard-number"
            label="Quantity"
            type="number"
            value={values.freezer}
            onChange={handleFieldChange('freezer')}
            InputLabelProps={{
              shrink: true,
            }}
          />}
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={values.washer}
              onChange={handleCheckChange('washer')}
              color="secondary"
            />
          }
          label="Washer"
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={values.dryer}
              onChange={handleCheckChange('dryer')}
              color="secondary"
            />
          }
          label="Dryer"
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={values.heat}
              onChange={handleCheckChange('heat')}
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
              onChange={handleCheckChange('ac')}
              color="secondary"
            />
          }
          label="Air Conditioning"
        />
        {!!values.ac &&
          <FormControl className={classes.windowOrCentral} >
            <InputLabel htmlFor="age-native-simple">Window or Central?</InputLabel>
            <Select
              style={{ width: 120 }}
              native
              label="Window or Central?"
              onChange={handleFieldChange('windowOrCentral')}
              inputProps={{
                id: 'age-native-simple',
              }}
            >
              <option value={0}>Central</option>
              <option value={1}>Window</option>
            </Select>
          </FormControl>
        }
        {(values.windowOrCentral === '1' && !!values.ac) &&
          <TextField
            className={classes.quantity}
            id="standard-number"
            label="Quantity"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            value={values.windowUnits}
            onChange={handleFieldChange('windowUnits')}
            InputLabelProps={{
              shrink: true,
            }}
          />}
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={values.eeBulbs}
              onChange={handleCheckChange('eeBulbs')}
              color="secondary"
            />
          }
          label="Energy-efficient light bulbs"
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
    );
  }
}

export default withStyles(styles)(FormApplianceInfo);