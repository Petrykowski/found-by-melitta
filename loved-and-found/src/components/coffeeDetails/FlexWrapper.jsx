import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const FlexWrapper = styled.div`
  height: auto;
  display: flex;
  width: 100%;
  flex-direction: column;
  
  ${media.desktop`
    flex-direction: row;
  `};
};
`;

FlexWrapper.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default FlexWrapper;
