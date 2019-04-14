// @flow

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
import * as React from 'react';

import { type Playlist } from '../../../types';

type AddToPlaylistProps = {
  playlists?: Array<Playlist>,
};
type AddToPlaylistState = {
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

  handleClose = (event: SyntheticEvent<HTMLButtonElement>) => {
    if (this.anchorEl && this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  handleAddToNewPlaylist = () => {
    console.log('add to new');
  };

  anchorEl: ?HTMLButtonElement;

  render() {
    const { playlists } = this.props;
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
                        <MenuItem key={id} onClick={this.handleClose}>
                          {name}
                        </MenuItem>
                      );
                    })}
                    {playlists.length && <Divider />}
                    <MenuItem onClick={this.handleAddToNewPlaylist}>
                      <PlaylistAddCheckTwoTone /> new
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

AddToPlaylist.defaultProps = {
  playlists: [],
};

export default AddToPlaylist;
