import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledSectionHeader = styled.br`
  display: ${ props => props.desktopOnly ? 'none' : 'initial'};

  ${media.desktop`
    display: ${ props => props.mobileOnly ? 'none' : 'initial'};
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
