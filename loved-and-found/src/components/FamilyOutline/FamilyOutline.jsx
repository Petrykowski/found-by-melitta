import React from 'react'

import StyledFamilyOutline from './StyledFamilyOutline'
import StyledFamilyImage from './StyledFamilyImage'
import StyledDescription from './StyledDescription'
import StyledTextWrapper from './StyledTextWrapper'

import StyledSectionImageWrapper from '../coffeeDetails/StyledSectionImageWrapper'
import StyledSectionHeader, {StyledH2} from '../Introduction/StyledHeader'
import StyledSectionContent from '../coffeeDetails/StyledSectionContent'
import StyledOrderButton from '../coffeeDetails/StyledOrderButton'

import ReactGA from 'react-ga'

export default class FamilyOutline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props.families[0]
    }
  }

  componentDidMount() {

  }

  order() {
    ReactGA.event({
      category: 'Bottom-Order',
      action: `of coffee ${this.props.name}`
    });
    window.location.href = `http://${window.location.host}/order`
  }

  render() {
    return (
      <StyledFamilyOutline>
          <StyledSectionImageWrapper>
            <StyledDescription>
              <StyledFamilyImage src={this.state.image} />
              <StyledTextWrapper>
                <StyledSectionHeader>{this.state.name}</StyledSectionHeader>
                <StyledH2>{this.state.description}</StyledH2>
              </StyledTextWrapper>
            </StyledDescription>
          </StyledSectionImageWrapper>


        <StyledOrderButton onClick={() => this.order()}>Bestellen</StyledOrderButton>
      </StyledFamilyOutline>
    )
  }

}