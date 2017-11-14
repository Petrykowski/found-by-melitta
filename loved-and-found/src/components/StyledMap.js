import styled from 'styled-components';
import { media } from './../../mediaStyles.js';

import Map from './map.png'

const StyledMap = styled.img.attrs({
  src: Map
})`
  width: auto;
  height: 100%;

  ${media.desktop`

  `};
};
`;

StyledMap.defaultProps = {
  theme: {
  },
};

export default StyledMap;
