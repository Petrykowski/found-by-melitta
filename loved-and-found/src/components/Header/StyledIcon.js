import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledHeader = styled.img`
  width: auto;
  height: 2rem;
  padding: 0.5rem;

  ${media.desktop`

  `};
};
`;

StyledHeader.defaultProps = {
  theme: {
    colors: {
      secondary: 'rgba(171, 171, 171, 0.45)'
    }
  },
};

export default StyledHeader;
