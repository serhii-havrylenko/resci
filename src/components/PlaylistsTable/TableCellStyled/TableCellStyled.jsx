// @flow

import { withStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';

const TableCellStyled = withStyles(() => ({
  head: {
    backgroundColor: '#3e4f65',
    color: '#fff',
    width: '100px',
    maxWidth: '150px',
  },
  body: {
    fontSize: 14,
    whiteSpace: 'pre',
    width: '100px',
    maxWidth: '150px',
    '&:first-child': {
      whiteSpace: 'nowrap',
    },
  },
}))(TableCell);

export default TableCellStyled;
