import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export class TopBar extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <AppBar position="static" color="primary" >
        <Toolbar>
        <Link to={{ pathname: "/" }} style={{ textDecoration: 'none', color: 'black' }}>
          <Typography variant="h6">
            Lithium
          </Typography>
        </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;