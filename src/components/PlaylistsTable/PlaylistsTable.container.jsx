// @flow

import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { PlaylistsStore } from '../../stores/playlists';
import PlaylistsTable from './PlaylistsTable';

const PlaylistsTableContainer: React.ComponentType<{}> = inject('playlists')(
  observer(
    ({
      playlists: playlistsStore,
      ...props
    }: {
      playlists: PlaylistsStore,
    }) => {
      return (
        <PlaylistsTable {...props} playlists={playlistsStore.playlists || []} />
      );
    },
  ),
);

export default PlaylistsTableContainer;
