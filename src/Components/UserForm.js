import React, { Component } from 'react';
import FormPriority from './FormPriority';
import FormDishwasherUsage from './FormDishwasherUsage';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    priority: '',
    dishwasherUsage: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { priority, dishwasherUsage } = this.state;
    const values = { priority, dishwasherUsage };

    switch (step) {
      case 1:
        return (
          <FormPriority
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormDishwasherUsage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;