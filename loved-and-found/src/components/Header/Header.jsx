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

  render(){
    return (
    <StyledHeader>
      <StyledIcon src={HeartIcon}/>
      <TextWrapper>
        <StyledText>Loved and Found</StyledText>
      </TextWrapper>
    </StyledHeader>
    )
  }
}