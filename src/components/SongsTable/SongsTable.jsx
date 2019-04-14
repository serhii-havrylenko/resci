// @flow

import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

import TableCellStyled from './TableCellStyled';
import AddToPlaylist from './AddToPlaylist';
import { type Song } from '../../types';

type SongsTableProps = {
  classes: Object,
  songs: Song[],
};

const SongsTable = ({ classes, songs }: SongsTableProps) => (
  <Paper className={classes.root}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCellStyled align="left">Title</TableCellStyled>
          <TableCellStyled align="left">Author</TableCellStyled>
          <TableCellStyled align="left">Duratipn</TableCellStyled>
          <TableCellStyled className={classes.actionsCell} align="center">
            Actions
          </TableCellStyled>
        </TableRow>
      </TableHead>
      <TableBody>
        {songs.map(song => (
          <TableRow className={classes.row} key={song.id}>
            <TableCellStyled align="left">{song.title}</TableCellStyled>
            <TableCellStyled align="left">{song.author}</TableCellStyled>
            <TableCellStyled align="left">{song.duration}</TableCellStyled>
            <TableCellStyled align="center">
              <AddToPlaylist />
            </TableCellStyled>
          </TableRow>
        ))}
        {!songs.length && (
          <TableRow>
            <TableCellStyled>No data to show for now</TableCellStyled>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </Paper>
);

export default withStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  actionsCell: {
    width: '50px',
  },
}))(SongsTable);
