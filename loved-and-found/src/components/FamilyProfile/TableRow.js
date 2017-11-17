

import styled from 'styled-components';
import { media } from './../../mediaStyles.js';


const TableRow = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  text-align: center;
  border-top: ${props => props.first ? '1px solid black' : 'none'};
  border-bottom: ${props => props.last ? '1px solid black' : 'none'};

  ${media.desktop`
  `};
};
`;

TableRow.defaultProps = {
  theme: {
    colors: {
    }
  },
};

export default TableRow;
