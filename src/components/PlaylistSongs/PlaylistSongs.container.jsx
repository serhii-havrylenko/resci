// @flow

import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { SongsStore } from '../../stores/songs';
import PlaylistSongs from './PlaylistSongs';

type PlaylistSongsContainerProps = {
  id: string,
};

const PlaylistSongsContainer: React.ComponentType<PlaylistSongsContainerProps> = inject(
  'songs',
)(
  observer(
    ({
      id,
      songs: songsStore,
      ...props
    }: PlaylistSongsContainerProps & {
      songs: SongsStore,
    }) => {
      return (
        <PlaylistSongs
          {...props}
          songs={songsStore.songsByPlaylist(id) || []}
        />
      );
    },
  ),
);

export default PlaylistSongsContainer;
