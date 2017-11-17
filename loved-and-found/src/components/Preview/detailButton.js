import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledOrderButton = styled.div`
  height: auto;
  background-color: #9a5d25;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  text-align: center;
  pointer-events: all;

  cursor: pointer;
  margin: 1rem;

  &:hover {
    background-color: #734a24;
  }

  ${media.desktop`
  `};
};
`;

StyledOrderButton.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default StyledOrderButton;
