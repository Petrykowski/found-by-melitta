import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledCountryButtonsWrapper = styled.div`
  height: auto;
  width: 90%;
  text-align: center;
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-x: scroll;

  ${media.desktop`
    width: 100%;
  `};
};
`;

StyledCountryButtonsWrapper.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default StyledCountryButtonsWrapper;
