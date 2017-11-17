import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledText = styled.div`
  width: auto;
  line-height: 2rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-family: 'Spectral SC', serif;
  height: 2rem;
  margin-top: 0.5rem;
  border-top: 1px solid ${props => props.color};
  border-bottom: 1px solid ${props => props.color};
  color: ${props => props.color};

  ${media.desktop`

  `};
};
`;

StyledText.defaultProps = {
  theme: {
    colors: {
      secondary: 'rgba(171, 171, 171, 0.45)'
    }
  },
};

export default StyledText;
