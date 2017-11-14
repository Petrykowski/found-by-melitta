import React, { Component } from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

//Components
import LandingScreen from './screens/LandingScreen'
import CountryScreen from './screens/CountryScreen'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      theme:{
        colors: {
          primary: '#e2031a',
          secondary: 'rgba(171, 171, 171, 0.55)'
        }
      },
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
      <ThemeProvider id="theme" theme={this.state.theme}>
      <Router>
        <div>
          <Route exact path="/" component={LandingScreen}/>
          <Route exact path="/country" component={CountryScreen}/>
        </div>
      </Router>
      </ThemeProvider>
    );
  }
}

export default App;