import styled from 'styled-components';
import { media } from './../../mediaStyles.js';

const StyledOrderInput = styled.input.attrs({
  type: 'text',
})`
  width: 90%;
  height: 2rem;
  font-size: 1.3rem;
  text-align: center;
  border: 1px solid black;

  ${media.desktop`
    width: 30%;
  `};
};
`;

StyledOrderInput.defaultProps = {
  theme: {
  },
};

export default StyledOrderInput;
