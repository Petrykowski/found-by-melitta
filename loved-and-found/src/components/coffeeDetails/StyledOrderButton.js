import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const StyledOrderButton = styled.div`
  height: auto;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  text-align: center;
  display: inline-block;

  margin-left: 50%;
  transform: translateX(-50%);

  cursor: pointer;

  &:hover {
    background-color: #b7081a;
  }

  ${media.desktop`
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
