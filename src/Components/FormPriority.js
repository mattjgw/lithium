import React, { Component } from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

export class FormPriority extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>

        {/* TODO: Make AppBar single componenet */}
        <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                Lithium
              </Typography>
              <div style={{float: "right"}}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">My House Profile</Button>
              </div>
            </Toolbar>
          </AppBar>

          <RadioGroup aria-label="priority" color="inherit" name="priority" value={values.priority} onChange={handleChange('priority')}>
            <FormLabel component="legend">What is your priority for home energy setup?</FormLabel>
            <FormControlLabel value="1" control={<Radio />} label="Saving money" />
            <FormControlLabel value="2" control={<Radio />} label="Eliminating Outages" />
            <FormControlLabel value="3" control={<Radio />} label="Reducing environmental impact" />
          </RadioGroup>

          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Continue</Button>
      </MuiThemeProvider>
    );
  }
}

export default FormPriority;