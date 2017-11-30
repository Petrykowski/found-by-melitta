import React from 'react'
import PropTypes from 'prop-types'

import StyledSectionHeader from './StyledSectionHeader'
import StyledSectionContent from './StyledSectionContent'
import StyledSectionImage from './StyledSectionImage'
import StyledSectionImageWrapper from './StyledSectionImageWrapper'
import StyledDetails from './StyledDetails'
import StyledOrderButton from './StyledOrderButton'
import LineBreak from './linebreak'
import CenterVertically from './CenterVertically'

import FlexWrapper from './FlexWrapper'
import FlexItem from './FlexItem'

import ReactGA from 'react-ga'

export default class CoffeeDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  order(bottom) {
    ReactGA.event({
      category: bottom ? 'Bottom-Order' : 'Top-Order',
      action: `of coffee ${this.props.name}`
    });
    this.context.changeRoute('order')
  }

  orderAndDonate(bottom) {
    ReactGA.event({
      category: 'OrderAndDonate',
      action: `of coffee ${this.props.name}`
    });
    this.context.changeRoute('order')
  }

  render() {
    return (
      <StyledDetails>
        <h1 style={{ 'textAlign': 'center', 'fontFamily': 'Spectral SC, serif' }}>{this.props.name}</h1>
        <FlexWrapper>
          <FlexItem>
            <StyledSectionImageWrapper>
              <StyledSectionImage src={this.props.image} />
            </StyledSectionImageWrapper>
            <StyledOrderButton onClick={() => this.order()} mobileOnly={true}>Bestellen</StyledOrderButton>
          </FlexItem>
          <FlexItem>
            <CenterVertically>
              <StyledSectionHeader>Land</StyledSectionHeader>
              <StyledSectionContent>{this.props.country}</StyledSectionContent>
              <StyledSectionHeader>Region</StyledSectionHeader>
              <StyledSectionContent>{this.props.region}</StyledSectionContent>
              <StyledSectionHeader>Geschmack</StyledSectionHeader>
              <StyledSectionContent>{this.props.taste}</StyledSectionContent>
              <StyledOrderButton onClick={() => this.order(true)} mobileOnly={true}>Bestellen</StyledOrderButton>
              <LineBreak desktopOnly={true}/><LineBreak desktopOnly={true}/><LineBreak desktopOnly={true}/>
              <StyledOrderButton onClick={() => this.order()} desktopOnly={true}>Bestellen</StyledOrderButton>
              <div style={{"marginTop": "2rem", marginRight: "2rem", marginBottom: "2rem"}}>
              <StyledSectionContent>Wir möchten die lokalen Kaffeebauer bei Ihrer Arbeit unterstützen. Deshalb machen wir es Ihnen möglich zusätzlich zum Kaffekauf auch für unsere Kaffeebauern zu spenden.</StyledSectionContent>
              </div>
              <div>
                <StyledOrderButton onClick={() => this.order(true)}>Bestellen & Spenden</StyledOrderButton>
              </div>
            </CenterVertically>
          </FlexItem>
        </FlexWrapper>
        <div style={{width: '100%', height: '3rem', 'textAlign': 'center'}}>
        <StyledOrderButton onClick={() => this.orderAndDonate()} desktopOnly={true}>Bestellen</StyledOrderButton>
        </div>
      </StyledDetails>
    )
  }
}

CoffeeDetails.contextTypes = {
  changeRoute: PropTypes.func
};