import styled from 'styled-components';
import { media } from './../../mediaStyles.js';

const StyledMap = styled.div`
  width: auto;

  .mapboxgl-control-container, .mapboxgl-control-container div {
    height: auto;
  };
  .mapboxgl-control-container .mapboxgl-ctrl-bottom-left {
    display: none;
  };

  ${media.desktop`

  `};
};
`;

StyledMap.defaultProps = {
  theme: {
  },
};

export default StyledMap;
