import React, { Component } from 'react';

//Components
import CoffeeDetails from '../components/coffeeDetails/CoffeeDetails.jsx'
import FamilyOutline from '../components/FamilyOutline/FamilyOutline.jsx'
import StyledCountryScreen from './StyledCountryScreen.jsx'
import Header from '../components/Header/Header.jsx'

import config from '../config.js'
import ReactGA from 'react-ga';
import logPageview from './logPageview'

class CountryScreen extends Component {

  constructor(props) {
    super(props)
    
    this.countryId = this.props.id
    this.state = config.coffees[this.countryId];
  }

  componentDidMount() {
    ReactGA.pageview(`/country/${this.countryId}`);
    logPageview()
  }

  render() {
    return (
      <div>
        <Header color={'white'}/>
        <FamilyOutline families={this.state.families} name={this.state.name}/>
      <StyledCountryScreen>
        <CoffeeDetails {...this.state}/>
      </StyledCountryScreen>
      </div>
    );
  }
}

export default CountryScreen;