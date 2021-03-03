import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';

const styles = {
  question: {
    height: 20,
    fontFamily: "sans-serif",
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20
  },
  textBox: {
    height: 120,
    width: 300
  },
  options: {
    height: 140,
  },
  shift: {
    marginLeft: 20,
    marginTop: 20
  },
  back: {
    marginTop: -10,
    marginRight: 10
  }
};


export class ApplianceUsageQuestion extends Component {
  render() {
    const { usage, handleChange, applianceName, applianceKey } = this.props;
    const { classes } = this.props;

    return (<>
      <Typography className={classes.question}>How many times do you use your {applianceName}(s) per week?</Typography>

      <TextField
        id="standard-number"
        label="Number of uses"
        type="number"
        value={usage}
        onChange={handleChange(applianceKey)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br />
    </>
    );
  }
}

export default withStyles(styles)(ApplianceUsageQuestion);