import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledSectionHeader = styled.div`
  height: auto;
  width: 100%;
  text-align: center;
  
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
