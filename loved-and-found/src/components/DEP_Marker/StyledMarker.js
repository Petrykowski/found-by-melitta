import styled from 'styled-components';
import { media } from './../../mediaStyles.js';

import Marker from './marker.svg'

const StyledMarker = styled.img.attrs({
  src: Marker
})`

  ${media.desktop`

  `};
};
`;

StyledMarker.defaultProps = {
  theme: {
  },
};

export default StyledMarker;
