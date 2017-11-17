import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledPreview = styled.div`
  width: auto;
  height: auto;
  max-width: 15rem;
  background-color: white;
  display: ${props => !props.show ? 'none' : 'initial'};
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  border-radius: 0.5rem;
  border: 0.3rem solid #9a5d25;

  transform: translateY(-110%) translateX(-50%);
  z-index: 150;

  ${media.desktop`

  `};
};
`;

StyledPreview.defaultProps = {
  theme: {
  },
};

export default StyledPreview;
