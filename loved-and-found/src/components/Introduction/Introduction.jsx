import React from 'react';

import StyledIntroduction from './StyledIntroduction'
import StyledHeader, {StyledH2} from './StyledHeader'

import MelittagLogo from './melitta_logo.png'

export default class Introduction extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <StyledIntroduction show={this.props.show}>
        <StyledHeader>Entdecke die Welt von <img style={{height: '3rem'}} src={MelittagLogo}/></StyledHeader>
        <StyledH2>Unser Kaffee kommt aus aller Welt und wird mit Liebe für dich auserlesen</StyledH2>
      </StyledIntroduction>
    )
  }
}

Introduction.defaultProps = {
  show: true
}