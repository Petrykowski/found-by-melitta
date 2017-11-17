import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledFamilyImage = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;

  ${media.desktop`
    width: 100%;
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
