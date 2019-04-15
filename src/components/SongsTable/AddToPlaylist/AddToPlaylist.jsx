// @flow

import { withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlaylistAddCheckTwoTone from '@material-ui/icons/PlaylistAddCheckTwoTone';
import { Link } from 'react-router-dom';
import * as React from 'react';

import type { Playlist, Song } from '../../../types';
import { ROUTES } from '../../../constants';

export type AddToPlaylistProps = {
  classes: Object,
  songId: $PropertyType<Song, 'id'>,
  playlists: Array<Playlist>,
  onAddToPlaylist: (
    id: $PropertyType<Playlist, 'id'>,
    songId: $PropertyType<Song, 'id'>,
  ) => void,
};
export type AddToPlaylistState = {
  open: boolean,
};

class AddToPlaylist extends React.Component<
  AddToPlaylistProps,
  AddToPlaylistState,
> {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = (event?: SyntheticEvent<HTMLButtonElement>) => {
    if (
      this.anchorEl &&
      event &&
      event.target instanceof Node &&
      this.anchorEl.contains(event.target)
    ) {
      return;
    }

    this.setState({ open: false });
  };

  handleAddToNewPlaylist = (songId: $PropertyType<Song, 'id'>) => () => {
    // TODO: implement auto adding to new playlist after creating
    console.log('add to new', songId);
    this.handleClose();
  };

  handleAddPlaylist = (
    id: $PropertyType<Playlist, 'id'>,
    songId: $PropertyType<Song, 'id'>,
  ) => () => {
    const { onAddToPlaylist } = this.props;

    onAddToPlaylist(id, songId);
    this.handleClose();
  };

  anchorEl: ?HTMLButtonElement;

  render() {
    const { classes, songId, playlists } = this.props;
    const { open } = this.state;

    return (
      <div>
        <IconButton
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          <PlaylistAddIcon />
        </IconButton>
        <Popper open={open} anchorEl={this.anchorEl} transition>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    {playlists.map(({ id, name }) => {
                      return (
                        <MenuItem
                          key={id}
                          onClick={this.handleAddPlaylist(id, songId)}
                        >
                          {name}
                        </MenuItem>
                      );
                    })}
                    {playlists.length && <Divider />}
                    <MenuItem>
                      <Link to={ROUTES.PLAYLISTS_ADD} className={classes.link}>
                        <PlaylistAddCheckTwoTone /> new
                      </Link>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}
export default withStyles(() => ({
  link: {
    textDecoration: 'none',
    display: 'flex',
    '&:visited': {
      color: 'inherit',
    },
  },
}))(AddToPlaylist);
