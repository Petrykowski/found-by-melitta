import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledSectionHeader = styled.span`
  height: auto;

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
