import React, { Component } from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';

import './App.css';

//Components
import Map from './components/Map/Map.jsx'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      theme: {}
    }
  }

  render() {
    return (
      <ThemeProvider id="theme" theme={this.state.theme}>
      <Map/>
      </ThemeProvider>
    );
  }
}

export default App;