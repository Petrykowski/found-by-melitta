
import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledPin = styled.img`
  height: auto;
  padding: 0.5rem;
  width: 1.3rem;
  
  ${media.desktop`
  `};
};
`;

StyledPin.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default StyledPin;
