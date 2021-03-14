import React, { Component } from 'react';
import homescreen from '../Images/homescreen.png';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TopBar from '../Components/TopBar';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
    shift: {
        marginLeft: 130,
        marginTop: 20
    },

    title: {
        //height: 80,
        fontSize: 32,
        marginTop: 20,
        fontWeight: 'bold',
        width: 600
    },

    subtitle: {
        //height: 60,
        fontSize: 24,
        marginTop: 20,
        width: 600
    },

    subtitle2: {
        //height: 100,
        fontSize: 22,
        marginTop: 20,
        color: '#2e7d32',
        width: 500
    },

    image: {
        height: 550,
        width: 400,
        marginTop: 40,
        marginLeft: 100
    },

    flex: {
        display: 'flex'
    },
};


export class HomePage extends Component {

  render() {
    const { classes } = this.props || {};
    console.log(this.props)
    return (
      <MuiThemeProvider theme= {theme}> 
            <TopBar />
            <Grid className={classes.flex}>

                <Grid className={classes.shift}>
                    <Typography className={classes.title}>Welcome to Lithium.</Typography>
                    <Typography className={classes.subtitle}>We are a home power recommendation engine to help you become informed about power options for your home.</Typography>
                    <Typography className={classes.subtitle}>Our goal is to give you personalized information about which home power devices are best suited for your home.</Typography>
                    <Typography className={classes.subtitle2}>We&#39;ll ask you for some information about your home and give you curated recommendations.</Typography>
                    <Typography className={classes.subtitle2}>Ready to give it a try? Click the button to get started.</Typography>
                    <Typography className={classes.title}> </Typography>
                    <Typography className={classes.title}> </Typography>

                    <Link to={{ pathname: "/survey" }} style={{ textDecoration: 'none' }} color="secondary">
                        <Button
                            TestId = "startButton"
                            color="secondary"
                            variant="contained"
                            onClick={this.continue}
                            >Start Questionnaire
                        </Button>
                    </Link>

                </Grid>

                <img className={classes.image} src={homescreen} alt="home page image" /> 

            </Grid>

      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(HomePage);