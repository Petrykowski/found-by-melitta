import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const CenterVertically = styled.div`
  height: auto;
  padding: 1rem;
  
  ${media.desktop`
    padding: none;
    width: 100%;
    margin-top: 50%;
    transform: translateY(-100%);
  `};
};
`;

CenterVertically.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default CenterVertically;
