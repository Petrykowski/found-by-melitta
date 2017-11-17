import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledSectionHeader = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  position: absolute;
  top: -3rem;
  z-index: 1;

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
