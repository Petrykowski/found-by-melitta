import React from 'react'

import StyledSectionHeader from './StyledSectionHeader'
import StyledSectionContent from './StyledSectionContent'
import StyledSectionImage from './StyledSectionImage'
import StyledSectionImageWrapper from './StyledSectionImageWrapper'
import StyledDetails from './StyledDetails'
import StyledOrderButton from './StyledOrderButton'

export default class CoffeeDetails extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
  }

  order() {
    window.location.href = `http://${window.location.host}/order`
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