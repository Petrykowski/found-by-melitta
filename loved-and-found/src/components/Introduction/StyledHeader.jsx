import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


export const StyledH1 = styled.h1`
  height: auto;
  padding: 1rem;
  margin: 0;
  display: inline-block;
  background-color: ${ props => props.theme.colors.secondary};
  
  ${media.desktop`
  
  `};
};
`;

export const StyledH2 = styled.div`
  height: auto;
  padding-left: 1rem;
  font-size: 1.5rem;
  padding-bottom: 0.3rem;
  color: white;
  margin: 0;
  display: table;
  background-color: ${ props => props.theme.colors.secondary};

  ${media.desktop`

  `};
};
`;

StyledH1.defaultProps = {
  theme: {
    colors: {
      secondary: 'rgba(171, 171, 171, 0.55)'
    }
  },
};


export default StyledH1;
