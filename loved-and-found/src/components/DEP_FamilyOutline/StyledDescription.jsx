import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledDescription = styled.div`
  height: auto;
  display: inline;
  ${media.desktop`

  `};
};
`;

StyledDescription.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default StyledDescription;
