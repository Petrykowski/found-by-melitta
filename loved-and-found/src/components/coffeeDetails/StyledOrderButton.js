import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledOrderButton = styled.div`
  height: auto;
  background-color: ${props => props.theme.colors.fourth};
  color: white;
  padding: 0.5rem 2rem;
  letter-spacing: 0.3rem;
  text-align: center;
  display: ${props => props.desktopOnly ? 'none' : 'inline-block'};

  margin-left: 50%;
  transform: translateX(-50%);

  cursor: pointer;
  margin-top: ${props => props.mobileOnly ? '1rem' : 'none'};
  margin-bottom: ${props => props.mobileOnly ? '1rem' : 'none'};

  &:hover {
    background-color: #987a5c;
  }

  ${media.desktop`
    display: ${props => props.mobileOnly ? 'none' : 'initial'};
    margin-left: 0;
    transform: none;
  `};
};
`;

StyledOrderButton.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default StyledOrderButton;
