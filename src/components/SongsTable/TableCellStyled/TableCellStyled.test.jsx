import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import { mount } from 'enzyme';
import * as React from 'react';

import TableCellStyled from './TableCellStyled';

describe('<TableCellStyled /> tests', () => {
  test('should match snapshot for head cell', () => {
    const wrapper = mount(
      <Table>
        <TableHead>
          <TableRow>
            <TableCellStyled>Cell</TableCellStyled>
          </TableRow>
        </TableHead>
      </Table>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot for body cell', () => {
    const wrapper = mount(
      <Table>
        <TableBody>
          <TableRow>
            <TableCellStyled>Cell</TableCellStyled>
          </TableRow>
        </TableBody>
      </Table>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
