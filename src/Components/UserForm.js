import React, { Component } from 'react';
import FormHousingInfo from './FormHousingInfo';
import FormApplianceInfo from './FormApplianceInfo';
import FormApplianceUsage from './FormApplianceUsage';
import Recommendations from './Recommendations';

export class UserForm extends Component {
  state = {
    step: 1,
    location: '',
    squareFootage: '',
    monthlyUsage: '',
    dishwasher: false,
    stove: false,
    oven: false,
    fridge: false,
    freezer: false,
    washerDryer: false,
    heat: false,
    ac: false,
    dishwasherUsage: '',
    stoveUsage: '',
    ovenUsage: '',
    secondFridge: '',
    secondFreezer: '',
    washerUsage: '',
    dryerUsage: '',
    acUsage: ''
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
  };

  // Handle checkbox change
  handleCheckChange = input => e => {
    this.setState({ [input]: !this.state[input] });
    console.log(this.state)
  };

  render() {
    const { step } = this.state;
    const { priority, location, squareFootage, monthlyUsage, dishwasher, stove, oven, fridge,
    freezer, washerDryer, ac, heat, dishwasherUsage, stoveUsage, ovenUsage, secondFridge, secondFreezer, 
    washerUsage, dryerUsage, acUsage } = this.state;
    const values = { priority, location, squareFootage, monthlyUsage, dishwasher, stove, oven, fridge,
    freezer, washerDryer, ac, heat, dishwasherUsage, stoveUsage, ovenUsage, secondFridge, secondFreezer, 
    washerUsage, dryerUsage, acUsage };

    switch (step) {
      case 1:
        return (
          <FormHousingInfo
            nextStep={this.nextStep}
            handleChange={this.handleFieldChange}
          />
            
        );
      case 2:
        return (
          <FormApplianceInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleCheckChange}
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
          return <Recommendations />;
      case 4:
        return <Recommendations />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;