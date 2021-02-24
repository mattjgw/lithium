import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';
import Grid from '@material-ui/core/Grid';

import TopBar from './TopBar';
import Option from './Option';

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
      height: 50,
      width: 500,
      fontFamily: "sans-serif",
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 10
    },
    shift: {
        marginLeft: 20,
        marginTop: 20
    },
    option: {
        marginTop: 20
    },
    options: {
        display: 'flex',
        marginTop: 80
    },
    flex: {
        display: 'flex'
    }
  };

export class Recommendations extends Component {

  render() {
    const { classes } = this.props;
    return (
        <MuiThemeProvider theme= {theme}> 
            <TopBar/>

            <Grid className={classes.flex}>

                <Grid className={classes.shift}>
                    <Typography className={classes.title}>My House Profile</Typography>
                    <Typography className={classes.subTitle}>Recommendations</Typography>

                    <Typography className={classes.question}>Based on your home energy needs, 
                    here’s what we recommend for eliminating power outages:
                    </Typography>

                    <br />

                    <Grid>
                        <Button
                        className={classes.option}
                        color="primary"
                        variant="contained"
                        >Option 1</Button>

                        <br />

                        <Button
                        className={classes.option}
                        color="primary"
                        variant="contained"
                        >Option 2</Button>

                        <br />

                        <Button
                        className={classes.option}
                        color="primary"
                        variant="contained"
                        >Option 3</Button>
                    </Grid>
                </Grid>

                <Grid className={classes.options}>
                    <Option className={classes.option} optionNumber={1}/>
                    <Option className={classes.option} optionNumber={2}/>
                    <Option className={classes.option} optionNumber={3}/>
                </Grid>

            </Grid>
      </MuiThemeProvider>
      
    );
  }
}

export default withStyles(styles)(Recommendations);