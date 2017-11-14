import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledIntroduction = styled.div`
  height: auto;
  margin-top: 10vh;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  pointer-events: none;
  display: ${props => props.show ? 'inherit' : 'none'};

  ${media.desktop`
      margin-top: 15vh;
  `};
};
`;

StyledIntroduction.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default StyledIntroduction;
