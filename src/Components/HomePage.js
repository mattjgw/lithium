import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TopBar from './TopBar';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';
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
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme= {theme}> 
        <TopBar/>

        <Grid className={classes.shift}>

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