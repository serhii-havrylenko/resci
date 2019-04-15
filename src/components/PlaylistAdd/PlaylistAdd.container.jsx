// @flow

import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { PlaylistsStore } from '../../stores/playlists';
import PlaylistAdd, { type PlaylistAddProps } from './PlaylistAdd';

type PlaylistAddContainerProps = {
  onDialogClose: $PropertyType<PlaylistAddProps, 'onDialogClose'>,
};

const PlaylistAddContainer: React.ComponentType<PlaylistAddContainerProps> = inject(
  'playlists',
)(
  observer(
    ({
      playlists: playlistsStore,
      ...props
    }: PlaylistAddContainerProps & {
      playlists: PlaylistsStore,
    }) => {
      return (
        <PlaylistAdd {...props} onCreateClick={playlistsStore.addPlaylist} />
      );
    },
  ),
);

export default PlaylistAddContainer;
