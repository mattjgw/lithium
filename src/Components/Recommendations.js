import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import TopBar from './TopBar';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
  fontWeight: 'bold',
  fontSize: 24,
  color: '#2e7d32',
  },
explaination: {
  height: 40,
  width: 500,
  fontFamily: "sans-serif",
  fontWeight: 'bold',
  fontSize: 18,
  marginTop: 10,
  marginBottom: 20
  },
shift: {
  marginLeft: 20,
  marginTop: 20
  },
suggestion: {
  height: 30,
  marginTop: 15
  },
};

export class Recommendations extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme= {theme}> 
        <TopBar/>

        <Grid className={classes.shift}>

            <Typography className={classes.title}>My House Profile</Typography>
            <Typography className={classes.subTitle}>Recommendations</Typography>

            <Typography className={classes.explaination}>Based on your home energy needs, here's
            what we recommend for eliminating power outages:</Typography>

            <Button className={classes.suggestion}
                    color="primary"
                    variant="contained">
                Tesla Powerwall
            </Button>
            <br />
            <Button className={classes.suggestion}
                    color="primary"
                    variant="contained">
                Sonnen Eco
            </Button>
            <br />
            <Button className={classes.suggestion}
                    color="primary"
                    variant="contained">
                Gas generator
            </Button>
            
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Recommendations);