import React from 'react';

import StyledHeader from './StyledHeader'
import StyledIcon from './StyledIcon'
import StyledText from './StyledText'
import TextWrapper from './StyledTextWrapper'

import HeartIcon from './heart.svg'

export default class Header extends React.Component {
  constructor(props){
    super(props)
  }

  navigateBack() {
    window.location.href = `http://${window.location.host}/`;
  }

  render(){
    return (
    <StyledHeader>
      <StyledIcon src={HeartIcon} onClick={() => this.navigateBack()}/>
      <TextWrapper color={this.props.color} onClick={() => this.navigateBack()}>
        <StyledText color={this.props.color}>Loved and Found</StyledText>
      </TextWrapper>
    </StyledHeader>
    )
  }
}

Header.defaultProps ={
  color: 'black'
}