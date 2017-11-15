import React, { Component } from 'react';

//Components
import CoffeeDetails from '../components/coffeeDetails/CoffeeDetails.jsx'
import FamilyOutline from '../components/FamilyOutline/FamilyOutline.jsx'
import StyledCountryScreen from './StyledCountryScreen.jsx'
import Header from '../components/Header/Header.jsx'

class CountryScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      coffee: {
        name: 'Coffee Name',
        image: 'http://via.placeholder.com/450x700',
        country: 'Country',
        region: 'Von den Hängen des Blue Mountain Bergs',
        taste: 'Lorem Ipsum Dolor Sit Amet',
        families: [
          {
            name: 'Familienname',
            description: 'Kurzer Beschreibungstext der die Familie Vorstellt',
            image: 'http://via.placeholder.com/1200x800'
          }
        ]
      }
    }
  }

  render() {
    return (
      <div>
        <Header/>
      <StyledCountryScreen>
        <CoffeeDetails {...this.state.coffee}/>
        <FamilyOutline families={this.state.coffee.families}/>
      </StyledCountryScreen>
      </div>
    );
  }
}

export default CountryScreen;