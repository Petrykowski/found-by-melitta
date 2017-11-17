import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledHeader = styled.div`
  width: 100%;
  height: 3rem;
  display: inline-flex;
  // background-color: ${ (props) => props.theme.colors.secondary };

  ${media.desktop`

  `};
};
`;

StyledHeader.defaultProps = {
  theme: {
    colors: {
      secondary: 'rgba(171, 171, 171, 0.55)'
    }
  },
};

export default StyledHeader;
