import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledCoffeeDetails = styled.div`
  height: auto;
  padding: 1rem;
  width: 100%;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  
  ${media.desktop`
    width: 40%;
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
