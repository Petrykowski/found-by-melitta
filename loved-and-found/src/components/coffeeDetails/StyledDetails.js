import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledCoffeeDetails = styled.div`
  height: auto;
  width: 100%;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  background-color: ${props => props.theme.colors.third};
  
  ${media.desktop`
  `};
};
`;

StyledCoffeeDetails.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default StyledCoffeeDetails;
