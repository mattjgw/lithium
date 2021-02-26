import React, { Component } from 'react';
import FormHousingInfo from './FormHousingInfo';
import FormApplianceInfo from './FormApplianceInfo';
import FormApplianceUsage from './FormApplianceUsage';
import Success from './Success';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export class UserForm extends Component {
  state = {
    step: 1,
    location: '',
    squareFootage: 0,
    numberOfPeopleInHousehold: 0,
    summerUsage: 0,
    winterUsage: 0,
    dishwasher: 0,
    stove: 0,
    oven: 0,
    fridge: 0,
    freezer: 0,
    washer: 0,
    dryer: 0,
    heat: 0,
    ac: 0,
    dishwasherUsage: 0,
    stoveUsage: 0,
    ovenUsage: 0,
    washerUsage: 0,
    dryerUsage: 0,
    acUsage: 0,
    windowOrCentral: 0,
    windowUnits: 0
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
  handleFieldChange = input => e => {
    this.setState({ [input]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value });
    console.log(this.state)
  };

  // Handle checkbox change
  handleCheckChange = input => e => {
    if (this.state[input] === 0)
      this.setState({ [input]: 1 });
    else
      this.setState({ [input]: 0 });
  };

  render() {
    const { step } = this.state;
    const { priority, location, squareFootage, monthlyUsage, dishwasher, stove, oven, fridge,
      freezer, washer, dryer, ac, heat, dishwasherUsage, stoveUsage, ovenUsage, secondFridge, secondFreezer,
      washerUsage, dryerUsage, acUsage } = this.state;
    const values = {
      priority, location, squareFootage, monthlyUsage, dishwasher, stove, oven, fridge,
      freezer, washer, dryer, ac, heat, dishwasherUsage, stoveUsage, ovenUsage, secondFridge, secondFreezer,
      washerUsage, dryerUsage, acUsage
    };

    switch (step) {
      case 1:
        return (
          <FormHousingInfo
            nextStep={this.nextStep}
            handleChange={this.handleFieldChange}
            values={values}
          />

        );
      case 2:
        return (
          <FormApplianceInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleCheckChange={this.handleCheckChange}
            handleFieldChange={this.handleFieldChange}
            values={values}
          />
        );
      case 3:
        if (values.dishwasher || values.stove || values.washer || values.dryer || values.ac || values.fridge || values.freezer) {
          return (
            <FormApplianceUsage
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleFieldChange}
              values={values}
            />
          )
        };
        return <Link to={{ pathname: "/performance", state: { response: this.state } }}>
          <Button
            color="secondary"
            variant="contained"
            onClick={this.continue}
          >Continue</Button>
        </Link>
      case 4:
        return <Link to={{ pathname: "/performance", state: { response: this.state } }}>
          <Button
            color="secondary"
            variant="contained"
            onClick={this.continue}
          >Get recommendations</Button>
        </Link>
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;