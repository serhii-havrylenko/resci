// @flow

import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { SongsStore } from '../../../stores/songs';
import { PlaylistsStore } from '../../../stores/playlists';
import AddToPlaylist, { type AddToPlaylistProps } from './AddToPlaylist';

type AddToPlaylistContainerProps = {
  songId: $PropertyType<AddToPlaylistProps, 'songId'>,
};
const AddToPlaylistContainer: React.ComponentType<AddToPlaylistContainerProps> = inject(
  'songs',
  'playlists',
)(
  observer(
    ({
      songs,
      playlists: playlistsStore,
      ...props
    }: AddToPlaylistContainerProps & {
      songs: SongsStore,
      playlists: PlaylistsStore,
    }) => {
      const playlists = songs.getPlaylistsForSong(props.songId);

      return (
        <AddToPlaylist
          {...props}
          playlists={playlists}
          onAddToPlaylist={playlistsStore.addToPlaylist}
        />
      );
    },
  ),
);

export default AddToPlaylistContainer;
