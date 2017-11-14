import React, { Component } from 'react';

//Components
import Map from '../components/Map/Map.jsx'
import Header from '../components/Header/Header.jsx'
import Introduction from '../components/Introduction/Introduction.jsx'
import CountryButtons from '../components/CountryButton/CountryButtons.jsx'

class LandingScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mapMoved: false
    }
  }

  mapMoves = () => {
    this.setState({
      mapMoved: true
    })
  }

  render() {
    return (
      <div>
        <Header/>
        Countryname
      </div>
    );
  }
}

export default LandingScreen;