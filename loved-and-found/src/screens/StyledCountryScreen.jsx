import styled from 'styled-components';
import { media } from './../mediaStyles.js';


const StyledCountryScreen = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  
  ${media.desktop`
    flex-wrap: nowrap;
  `};
};
`;

StyledCountryScreen.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default StyledCountryScreen;
