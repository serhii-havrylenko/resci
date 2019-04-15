// @flow

import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DetailsIcon from '@material-ui/icons/Details';
import * as React from 'react';
import { Link } from 'react-router-dom';

import TableCellStyled from './TableCellStyled';
import { type Playlist } from '../../types';
import { ROUTES } from '../../constants';

type PlaylistsTableProps = {
  classes: Object,
  playlists: Playlist[],
};

const PlaylistsTable = ({ classes, playlists }: PlaylistsTableProps) => (
  <Paper className={classes.root}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCellStyled align="left">Name</TableCellStyled>
          <TableCellStyled align="left">Details</TableCellStyled>
        </TableRow>
      </TableHead>
      <TableBody>
        {playlists.map(playlist => {
          const detailsUrl = ROUTES.PLAYLISTS_DETAILS.replace(
            ':id',
            playlist.id,
          );
          return (
            <TableRow className={classes.row} key={playlist.id}>
              <TableCellStyled align="left">{playlist.name}</TableCellStyled>
              <TableCellStyled align="left">
                <Link to={detailsUrl} className={classes.link}>
                  <DetailsIcon /> new
                </Link>
              </TableCellStyled>
            </TableRow>
          );
        })}
        {!playlists.length && (
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
  link: {
    textDecoration: 'none',
    display: 'flex',
    '&:visited': {
      color: 'inherit',
    },
  },
}))(PlaylistsTable);
