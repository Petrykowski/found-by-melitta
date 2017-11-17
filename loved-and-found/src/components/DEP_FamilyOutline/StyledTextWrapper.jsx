import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledTextWrapper = styled.div`
  height: auto;
  text-align: left;
  margin-bottom: 1rem;
  
  ${media.desktop`
    margin-bottom: 0rem;
    position:absolute;
    bottom: 1rem;
    left: 1rem;
  `};
};
`;

StyledTextWrapper.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default StyledTextWrapper;
