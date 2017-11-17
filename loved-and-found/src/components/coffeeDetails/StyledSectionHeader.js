import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledSectionHeader = styled.div`
  height: auto;
  width: 100%;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-family: 'Spectral SC', serif;
  font-weight: bold;
  padding: 0.4rem 0;
  // border-top: 1px solid black;
  // border-bottom: 1px solid black;
  margin-top: 1rem;
  // text-align: center;

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
