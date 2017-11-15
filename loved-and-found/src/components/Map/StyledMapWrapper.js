import styled from 'styled-components';
import { media } from './../../mediaStyles.js';

const StyledMapWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  opacity: ${ (props) => props.opacity};
  transition: opacity 3s ease-in;

  ${media.desktop`

  `};
};
`;

StyledMapWrapper.defaultProps = {
  theme: {
  },
};

export default StyledMapWrapper;
