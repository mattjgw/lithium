import React, { Component } from 'react';
import FormHousingInfo from './FormHousingInfo';
import FormApplianceInfo from './FormApplianceInfo';
import FormApplianceUsage from './FormApplianceUsage';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    location: '',
    squareFootage: '',
    numberOfPeopleInHousehold: '',
    monthlyUsage: '',
    dishwasher: 0,
    stove: 0,
    oven: 0,
    fridge: 0,
    freezer: 0,
    washerDryer: 0,
    heat: 0,
    ac: 0,
    dishwasherUsage: 0,
    stoveUsage: 0,
    ovenUsage: 0,
    washerUsage: 0,
    dryerUsage: 0,
    acUsage: 0,
    windOrCentral: 0,
    windUnits: 0
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
    this.setState({ [input]: e.target.value });
    console.log(this.state)
  };

  // Handle checkbox change
  handleCheckChange = input => e => {
    if(this.state[input] === 0)
      this.setState({ [input]: 1 });
    else
      this.setState({ [input]: 0 });
  };

  render() {
    const { step } = this.state;
    const { priority, location, squareFootage, monthlyUsage, dishwasher, stove, oven, fridge,
    freezer, washerDryer, ac, heat, dishwasherUsage, stoveUsage, ovenUsage, secondFridge, secondFreezer, 
    washerUsage, dryerUsage, acUsage, windOrCentral } = this.state;
    const values = { priority, location, squareFootage, monthlyUsage, dishwasher, stove, oven, fridge,
    freezer, washerDryer, ac, heat, dishwasherUsage, stoveUsage, ovenUsage, secondFridge, secondFreezer, 
    washerUsage, dryerUsage, acUsage, windOrCentral };

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
        if(values.dishwasher || values.stove || values.washerDryer || values.ac || values.fridge || values.freezer) {
          return (
            <FormApplianceUsage
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleFieldChange}
              values={values}
            />
      )};
          return <Success />;
      case 4:
        console.log(this.state);
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;