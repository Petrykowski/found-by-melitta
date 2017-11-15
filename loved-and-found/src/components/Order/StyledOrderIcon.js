import styled from 'styled-components';
import { media } from './../../mediaStyles.js';

const StyledOrderIcon = styled.img`
  height: 6rem;

  ${media.desktop`

  `};
};
`;

StyledOrderIcon.defaultProps = {
  theme: {
  },
};

export default StyledOrderIcon;
