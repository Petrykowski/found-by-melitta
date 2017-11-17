
import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const SectionWrapper = styled.div`
  height: auto;
  text-align: center;
  padding-top: 1.2rem;
  padding-bottom: .5rem;
  background-color: #9a5d25;
  margin-bottom: 1rem;
  
  > span {
    font-size: 1.5rem;
    color: white;
  }

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
