import React, { Component } from 'react';

//Components
import CoffeeDetails from '../components/coffeeDetails/CoffeeDetails.jsx'
import FamilyOutline from '../components/FamilyOutline/FamilyOutline.jsx'
import StyledCountryScreen from './StyledCountryScreen.jsx'
import Header from '../components/Header/Header.jsx'

import StyledOrderWrapper from '../components/Order/StyledOrderWrapper'
import StyledOrderInput from '../components/Order/StyledOrderInput'
import StyledOrderIcon from '../components/Order/StyledOrderIcon'
import StyledOrderText from '../components/Order/StyledOrderText'
import StyledOrderButton from '../components/Order/StyledOrderButton'

import Heart from '../components/Header/heart.svg'

import ReactGA from 'react-ga'

class OrderScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      subscribed: false,
    }
  }

  componentDidMount() {
    ReactGA.pageview(`/order`);
  }

  subscribe(event) {
    ReactGA.event({
      category: 'Registration',
      action: `${this.state.email.split('@')}`
    });
    this.setState({
      subscribed: true
    })
    event.preventDefault();
  }

  onChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Header />
        <StyledOrderWrapper>
          <StyledOrderIcon src={Heart} />
          <h1>Danke für dein Interesse</h1>
          { !this.state.subscribed ?
            ( [
              <StyledOrderText>
                Eine Bestellung ist aktuell noch nicht möglich, da wir uns momentan erst noch im Aufbau dieses Projekts und in einer geschlossenen Testphase befinden.
              <br />Als Dankeschön für dein Interesse kannst du dir jedoch ein Early-Adopter Special sichern und erhältst einen 25€ Gutschein für deine erste Bestellung.
            </StyledOrderText>,
              <form onSubmit={(event) => this.subscribe(event)}>
                <StyledOrderInput onChange={(event) => this.onChange(event)} />
                <br />
                <StyledOrderButton onClick={(event) => this.subscribe(event)}>Gutschein sichern</StyledOrderButton>
              </form>
            ]
            )
            : null
          }
        </StyledOrderWrapper>
      </div>
    );
  }
}

export default OrderScreen;