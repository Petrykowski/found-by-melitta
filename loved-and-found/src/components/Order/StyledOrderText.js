import styled from 'styled-components';
import { media } from './../../mediaStyles.js';

const StyledOrderText = styled.div`
  line-height: 1.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;

  ${media.desktop`

  `};
};
`;

StyledOrderText.defaultProps = {
  theme: {
  },
};

export default StyledOrderText;
