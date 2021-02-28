import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    let values = this.props.values;
    return (
      <>
        <Dialog
          open
          fullWidth
          maxWidth='sm'
        >
          <AppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <Link to={{ pathname: "/recommendations", state: { response: values } }}>
            <Button
              color="secondary"
              variant="contained"
            >Continue</Button>
          </Link>
        </Dialog>
      </>
    );
  }
}

export default Success;