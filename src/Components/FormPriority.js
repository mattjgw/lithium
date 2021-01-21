import React, { Component } from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TopBar from './TopBar';

export class FormPriority extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <TopBar />

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