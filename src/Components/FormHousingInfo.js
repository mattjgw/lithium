import React, { Component } from 'react';
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
    this.props.nextStep();
  };

  render() {
    const { handleChange } = this.props;
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme= {theme}> 
        <TopBar/>

        <Grid className={classes.shift}>

            <Typography className={classes.title}>Questionnaire</Typography>
            <Typography className={classes.subTitle}>Housing Information</Typography>

            <Typography className={classes.question}>Where do you live?</Typography>
            <br />
                <TextField
                className={classes.textBox}
                placeholder="Location"
                label="Location"
                onChange={handleChange('location')}
                margin="normal"
                fullWidth
                />
            <br />

            <Typography className={classes.question}>What is the square footage of your home?</Typography>
            <br />
                <TextField
                className={classes.textBox}
                placeholder="Square Footage"
                label="Square Footage"
                onChange={handleChange('squareFootage')}
                margin="normal"
                fullWidth
                />
            <br />

            <Typography className={classes.question}>What is your average monthly power usage during the summer (kWh)?</Typography>
            <br />
                <TextField
                className={classes.textBox}
                placeholder="Monthly usage"
                label="Monthly usage"
                onChange={handleChange('monthlyUsage')}
                margin="normal"
                fullWidth
                />
            <br />

            <Typography className={classes.question}>What is your average monthly power usage during the winter (kWh)?</Typography>
            <br />
                <TextField
                className={classes.textBox}
                placeholder="Monthly usage"
                label="Monthly usage"
                onChange={handleChange('monthlyUsage')}
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
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(FormPriority);