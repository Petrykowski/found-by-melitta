import React from 'react'
import PropTypes from 'prop-types'

import StyledSectionHeader from './StyledSectionHeader'
import StyledSectionContent from './StyledSectionContent'
import StyledSectionImage from './StyledSectionImage'
import StyledSectionImageWrapper from './StyledSectionImageWrapper'
import StyledDetails from './StyledDetails'
import StyledOrderButton from './StyledOrderButton'

import ReactGA from 'react-ga'

export default class CoffeeDetails extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  order() {
    ReactGA.event({
      category: 'Top-Order',
      action: `of coffee ${this.props.name}`
    });
    this.context.changeRoute('order')
  }

  render(){
    return (
      <StyledDetails>
        <h1>{this.props.name}</h1>
        <StyledSectionImageWrapper>
          <StyledSectionImage src={this.props.image}/>
        </StyledSectionImageWrapper>
        <StyledOrderButton onClick={() => this.order()} >Bestellen</StyledOrderButton>

        <StyledSectionHeader>Land</StyledSectionHeader>
        <StyledSectionContent>{this.props.country}</StyledSectionContent>
        <StyledSectionHeader>Region</StyledSectionHeader>
        <StyledSectionContent>{this.props.region}</StyledSectionContent>
        <StyledSectionHeader>Geschmack</StyledSectionHeader>
        <StyledSectionContent>{this.props.taste}</StyledSectionContent>
      </StyledDetails>
    )
  }
}

CoffeeDetails.contextTypes = {
  changeRoute: PropTypes.func
};