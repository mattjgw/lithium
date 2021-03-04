import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
          <Typography variant="h6">
            Lithium
          </Typography>
          <div style={{ float: "right" }}>
            <Link to={{ pathname: "/" }} style={{ textDecoration: 'none' }}>
              <Button color="inherit">Home</Button>
            </Link>
            <Button color="inherit">About</Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;