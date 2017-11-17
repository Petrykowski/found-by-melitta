import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledFamilyImage = styled.img`
  height: auto;
  max-width: 100%;

  ${media.desktop`
    max-width: 90%;
  `};
};
`;

StyledFamilyImage.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default StyledFamilyImage;
