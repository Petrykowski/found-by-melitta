import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';

import './App.css';

//Components
import LandingScreen from './screens/LandingScreen'
import CountryScreen from './screens/CountryScreen'
import OrderScreen from './screens/OrderScreen'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      theme:{
        colors: {
          primary: '#e2031a',
          // secondary: 'rgba(171, 171, 171, 0.55)'
          secondary: '#c7a079b5',
          third: 'rgb(234, 231, 222)',
          fourth: '#c7a079'
        }
      },
      mapMoved: false,
      route: {
        name: 'start',
        props: {id: 0}
      }
    }
    window.location.hash = `#`

    window.addEventListener("hashchange", (e) => {
      // ...
      var currentRoute = e.newURL.split('#')[1]
      var props = {}
      if(currentRoute.startsWith('country')){
        var id = currentRoute.split('/')[1]
        currentRoute = currentRoute.split('/')[0]
        props.id = id;
      }
      if(currentRoute != this.state.route.name){
        this.setState({
          route: {
            name: currentRoute,
            props
          }
        })
      }
      console.log("back", e)
      e.preventDefault()
    })
  }

  mapMoves = () => {
    this.setState({
      mapMoved: true
    })
  }

  changeRoute(newRoute, props={}) {
    console.log(props)
    if(typeof props.id !== 'undefined'){
      newRoute = newRoute + '/' + props.id;
    }
    this.setState({
      route: {
        name: newRoute,
        props,
      }
    })
    window.location.hash = `#${newRoute}`
  }

  getChildContext() {
    return {
      changeRoute: (newRoute, props) => this.changeRoute(newRoute, props),
    };
  }

  renderScreen() {
    switch (this.state.route.name) {
      case 'start':
        return <LandingScreen {...this.state.route.props} />
      case 'country':
        return <CountryScreen {...this.state.route.props} />
      case 'order':
        return <OrderScreen {...this.state.route.props} />
      default:
        return <LandingScreen {...this.state.route.props} />
    }
  }

  render() {
    return (
      <ThemeProvider id="theme" theme={this.state.theme}>
      {
        this.renderScreen()
      }
      </ThemeProvider>
    );
  }
}

App.childContextTypes = {
  changeRoute: PropTypes.func
};

export default App;