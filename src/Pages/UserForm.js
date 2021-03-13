import React, { Component } from 'react';
import FormApplianceInfo from '../Components/FormApplianceInfo';
import FormApplianceUsage from '../Components/FormApplianceUsage';
import FormHousingInfo from '../Components/FormHousingInfo';
import FormOutageDefinition from '../Components/FormOutageDefinition';
import Success from '../Components/Success';
import TopBar from '../Components/TopBar';

export class UserForm extends Component {
  state = {
    step: 1,
    priority: '',
    location: '',
    squareFootage: '',
    numberOfPeopleInHousehold: '',
    summerUsage: '',
    winterUsage: '',
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
    windowUnits: 0,
    additionalDevices: []
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
      washerUsage, dryerUsage, acUsage, additionalDevices, summerUsage, winterUsage, windowOrCentral, numberOfPeopleInHousehold } = this.state;
    const values = {
      priority, location, squareFootage, monthlyUsage, dishwasher, stove, oven, fridge,
      freezer, washer, dryer, ac, heat, dishwasherUsage, stoveUsage, ovenUsage, secondFridge, secondFreezer,
      washerUsage, dryerUsage, acUsage, additionalDevices, summerUsage, winterUsage, windowOrCentral, numberOfPeopleInHousehold
    };


    let innerForm = (() => {
      switch (step) {
        case 1:
          return (
            <FormOutageDefinition
              nextStep={this.nextStep}
              handleChange={this.handleFieldChange}
              values={values}
              progress={20}
            />

          );
        case 2:
          return (
            <FormHousingInfo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleFieldChange}
              values={values}
              progress={40}
            />

          );
        case 3:
          return (
            <FormApplianceInfo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleCheckChange={this.handleCheckChange}
              handleFieldChange={this.handleFieldChange}
              values={values}
              progress={60}
            />
          );
        case 4:
          if (values.dishwasher || values.stove || values.washer || values.dryer || values.ac || values.fridge || values.freezer) {
            return (
              <FormApplianceUsage
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleFieldChange}
                values={values}
                progress={80}
              />
            )
          };
          return <Success values={values} />
        case 5:
          return <Success values={values} />
        default:
          (console.log('This is a multi-step form built with React.'))
      }
    })();


    return <>
      <TopBar />
      {innerForm}
    </>

  }
}

export default UserForm;