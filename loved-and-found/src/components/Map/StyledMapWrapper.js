import styled from 'styled-components';
import { media } from './../../mediaStyles.js';

const StyledMapWrapper = styled.div`
  width: auto;
  height: 100%;
  opacity: ${ (props) => props.opacity};
  transition: opacity 4s ease;

  ${media.desktop`

  `};
};
`;

StyledMapWrapper.defaultProps = {
  theme: {
  },
};

export default StyledMapWrapper;
