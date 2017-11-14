import React from 'react';
import PropTypes from 'prop-types';

import StyledCountryButtonsWrapper from './StyledCountryButtonsWrapper'
import StyledCountryButton from './StyledCountryButton'

export default class CountryButtons extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      countries: [
        'Peru',
        'Uganda',
        'Kambodscha',
        'Brasilien'
      ]
    }
  }

  render () {
    return (
      <StyledCountryButtonsWrapper>
        {
          this.state.countries.map( (country) => {
            return <StyledCountryButton>{country}</StyledCountryButton>
          })
        }
      </StyledCountryButtonsWrapper>
    )
  }
}

CountryButtons.propTypes = {
  text: PropTypes.string
}