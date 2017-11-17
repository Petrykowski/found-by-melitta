

import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const TableCell = styled.div`
  height: auto;
  width: ${props => {
    if(props.full){return '100%'}
    return props.first ? '40%' : '60%'
  }};
  text-align: left;
  border-right: ${props => props.first ? '1px dashed black' : 'none'};
  padding: 1rem;
  padding-left: ${props => props.first ? 'none' : '1rem'};

  ${media.desktop`
  `};
};
`;

TableCell.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default TableCell;
