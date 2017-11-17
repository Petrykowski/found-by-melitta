import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledPreview = styled.div`
  width: auto;
  height: auto;
  background-color: ${props => props.theme.colors.third};
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  border-radius: 0.5rem;

  transform: translateY(-100%) translateX(1rem);
  z-index: 20;

  ${media.desktop`

  `};
};
`;

StyledPreview.defaultProps = {
  theme: {
  },
};

export default StyledPreview;
