import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledTextWrapper = styled.div`

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
