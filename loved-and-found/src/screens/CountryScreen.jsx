import React, { Component } from 'react';

//Components
import CoffeeDetails from '../components/coffeeDetails/CoffeeDetails.jsx'
import FamilyOutline from '../components/FamilyOutline/FamilyOutline.jsx'
import StyledCountryScreen from './StyledCountryScreen.jsx'
import Header from '../components/Header/Header.jsx'

import config from '../config.js'

class CountryScreen extends Component {

  constructor(props) {
    super(props)
    let pathSplit = window.location.pathname.split('/')
    this.countryId = parseInt( pathSplit[pathSplit.length - 1] )
    this.state = config.coffees[this.countryId];
  }

  render() {
    return (
      <div>
        <Header/>
      <StyledCountryScreen>
        <CoffeeDetails {...this.state}/>
        <FamilyOutline families={this.state.families}/>
      </StyledCountryScreen>
      </div>
    );
  }
}

export default CountryScreen;