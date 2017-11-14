import React from 'react';
import PropTypes from 'prop-types';

import StyledCountryButton from './StyledCountryButton'

export default class CountryButton extends React.Component {

  render () {
    return (
      <StyledCountryButton>
          {this.props.text}
      </StyledCountryButton>
    )
  }
}

CountryButton.propTypes = {
  text: PropTypes.string
}