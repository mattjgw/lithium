import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

export class FormDishwasherUsage extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>

        {/* TODO: Make AppBar Single Component */}
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

          <RadioGroup aria-label="dishwasherUsage" color="inherit" name="dishwasherUsage" value={values.dishwasherUsage} onChange={handleChange('dishwasherUsage')}>
            <FormLabel component="legend">How often do you use your dishwasher?</FormLabel>
            <FormControlLabel value="1" control={<Radio />} label="At least once daily" />
            <FormControlLabel value="2" control={<Radio />} label="Once or twice per week" />
            <FormControlLabel value="3" control={<Radio />} label="Never" />
          </RadioGroup>
          
          <Button
            color="secondary"
            variant="contained"
            onClick={this.back}
          >Back</Button>

          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Continue</Button>
      </MuiThemeProvider>
    );
  }
}

export default FormDishwasherUsage;