import styled from 'styled-components';
import { media } from './../../mediaStyles.js';

const StyledOrderWrapper = styled.div`
  height: auto;
  padding 2rem;
  text-align: center;
  margin-top: 50vh;
  transform: translateY(-50%);

  font-family: 'Raleway', sans-serif;
  font-weight: 300;

  ${media.desktop`

  `};
};
`;

StyledOrderWrapper.defaultProps = {
  theme: {
  },
};

export default StyledOrderWrapper;
