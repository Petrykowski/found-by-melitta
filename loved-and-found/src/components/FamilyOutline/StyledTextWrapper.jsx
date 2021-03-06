import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledTextWrapper = styled.div`
  height: auto;
  text-align: left;
  // margin-bottom: 1rem;
  
  margin-bottom: 0rem;
  margin-right: 0.5rem;
  position:absolute;
  bottom: 1rem;
  left: 1rem;
  ${media.desktop`
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
