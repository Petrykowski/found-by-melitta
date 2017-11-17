import React, { Component } from 'react';

//Components
import Map from '../components/Map/Map.jsx'
import Header from '../components/Header/Header.jsx'
import Introduction from '../components/Introduction/Introduction.jsx'
import CountryButtons from '../components/CountryButton/CountryButtons.jsx'

import { Route, Redirect } from 'react-router'

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
        <div style={{position:"absolute", height: "auto", top: 0, 'zIndex': 100}} id='modal'></div>
        <Introduction show={!this.state.mapMoved}/>
        <Map isMoving={this.mapMoves}/>
        {/* <CountryButtons/> */}
      </div>
    );
  }
}

export default LandingScreen;