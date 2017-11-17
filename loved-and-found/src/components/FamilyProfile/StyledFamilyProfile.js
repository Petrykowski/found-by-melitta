import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledFamilyProfile = styled.div`
  height: auto;
  display: inline;
  position: absolute;
  background-color: #ffffffeb;
  border-radius: 0.5rem;
  top: 3rem;
  left: 0;
  right: 0;
  width: calc( 100% - 2rem );
  margin: 1rem;
  font-famile: OpenSans, sans-serif;
  padding-bottom: 1rem;
  max-height: 95vh;
  
  ${media.desktop`
    width: 25%;
    height: auto;
    top: 3rem;
    left: 5rem;
  `};
};
`;

StyledFamilyProfile.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default StyledFamilyProfile;
