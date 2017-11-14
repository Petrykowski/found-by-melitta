import styled from 'styled-components';
import { media } from './../../mediaStyles.js';

const StyledCanvasMap = styled.canvas`
  width: 100%;
  height: 100%;

  &:hover {
    cursor: move;
  }

  ${media.desktop`
    width: 100%;
  `};
};
`;

StyledCanvasMap.defaultProps = {
  theme: {
  },
};

export default StyledCanvasMap;
