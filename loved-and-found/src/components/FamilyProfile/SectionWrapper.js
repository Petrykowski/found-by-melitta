
import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const SectionWrapper = styled.div`
  height: auto;
  text-align: center;
  padding 0 2rem;
  
  ${media.desktop`
  `};
};
`;

SectionWrapper.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default SectionWrapper;
