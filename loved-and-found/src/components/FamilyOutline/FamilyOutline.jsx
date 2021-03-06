import React from 'react'
import PropTypes from 'prop-types';

import StyledFamilyOutline from './StyledFamilyOutline'
import StyledFamilyImage from './StyledFamilyImage'
import StyledTransitionEffect from './StyledTransitionEffect'
import StyledDescription from './StyledDescription'
import StyledTextWrapper from './StyledTextWrapper'

import StyledSectionImageWrapper from './StyledSectionImageWrapper'
import StyledSectionHeader, {StyledH2} from '../Introduction/StyledHeader'
import StyledSectionContent from '../coffeeDetails/StyledSectionContent'
import StyledOrderButton from '../coffeeDetails/StyledOrderButton'

import FamilyProfile from '../FamilyProfile/FamilyProfile'

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
    this.context.changeRoute('order')
  }

  render() {
    return (
      <StyledFamilyOutline>
          <StyledSectionImageWrapper>
            <StyledDescription>
              <StyledFamilyImage src={this.state.image} />
              <StyledTransitionEffect/>
            </StyledDescription>
            <FamilyProfile {...this.state}/>
          </StyledSectionImageWrapper>


          </StyledFamilyOutline>
        )
        // <StyledOrderButton onClick={() => this.order()}>Bestellen</StyledOrderButton>
  }

}

FamilyOutline.contextTypes = {
  changeRoute: PropTypes.func
};