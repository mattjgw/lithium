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
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
  windOrCentral: {
    width: 150
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
    const { values, handleCheckChange, handleFieldChange } = this.props;
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
                    onChange={handleCheckChange('dishwasher')}
                    color="secondary"
                />
                }
                label="Dishwasher"
            />
            {!!values.dishwasher &&
              <TextField
                className={classes.quantity}
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
                label="Freezer"
            />
            {!!values.freezer &&
              <TextField
                className={classes.quantity}
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
                    checked={values.washerDryer}
                    onChange={handleCheckChange('washerDryer')}
                    color="secondary"
                />
                }
                label="Washer/Dryer"
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
              <FormControl className={classes.windOrCentral} >
              <InputLabel htmlFor="age-native-simple">Wind or Central?</InputLabel>
              <Select
                style={{width: 120}}
                native
                label="Wind or Central?"
                onChange={handleFieldChange('windOrCentral')}
                inputProps={{
                  id: 'age-native-simple',
                }}
              >
                <option value={0}>Central</option>
                <option value={1}>Wind</option>
              </Select>
              </FormControl>
            }
            {(values.windOrCentral === '1' && !!values.ac) &&
              <TextField
              className={classes.quantity}
              id="standard-number"
              label="Quantity"
              type="number"
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
                label="Energy efficient light bulbs"
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