import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledSectionHeader = styled.img`
  height: 35vh;
  padding: 1rem;
  
  ${media.desktop`
  `};
};
`;

StyledSectionHeader.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default StyledSectionHeader;
