import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
    subTitle: {
      height: 300,
      width: 200,
      fontFamily: "sans-serif",
      fontWeight: 30,
      fontSize: 24,
      color: 'black',
      backgroundColor: 'grey',
      marginRight: 40
    },
    shift: {
        marginLeft: 30,
        marginTop: 20
    },
  };

export class Option extends Component {

  render() {
    const { classes } = this.props;
    return (
    <Typography className={classes.subTitle}>Option {this.props.optionNumber}</Typography>
    );
  }
}

export default withStyles(styles)(Option);