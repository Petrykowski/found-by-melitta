import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const FlexWrapper = styled.div`
  height: auto;  
  width: 100%;

${media.desktop`
    height: 100vh;
    width: 50%
  `};
};
`;

FlexWrapper.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default FlexWrapper;
