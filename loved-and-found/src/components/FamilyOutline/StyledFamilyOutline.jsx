import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledFamilyOutline = styled.div`
  height: auto;
  width: 100%;
  background-color: 'blue';
  padding: 1rem;
  
  ${media.desktop`
    padding-top: 1.67rem;
    width: 60%;
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
