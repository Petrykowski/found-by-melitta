import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledFamilyOutline = styled.div`
  height: calc( 100% - 3rem);
  width: 100%;
  position: relative;
  z-index: 1;
  
  ${media.desktop`
    width: 100%;
  `};
};
`;

StyledFamilyOutline.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default StyledFamilyOutline;
