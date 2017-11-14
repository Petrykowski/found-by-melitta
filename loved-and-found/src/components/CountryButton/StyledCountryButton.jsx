import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledCountryButton = styled.div`
  height: auto;
  text-align: center;
  padding: 1rem;
  
  border: 1px solid black;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0.3rem;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }

  ${media.desktop`
    padding: 0.5rem;
  `};
};
`;

StyledCountryButton.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default StyledCountryButton;
