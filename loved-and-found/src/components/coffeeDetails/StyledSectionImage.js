import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledSectionImage = styled.img`
  height: 60vh;
  padding: 1rem;
  max-width: 100%;
  
  ${media.desktop`
    height: 80vh;
    padding: 1rem;
  `};
};
`;

StyledSectionImage.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default StyledSectionImage;
