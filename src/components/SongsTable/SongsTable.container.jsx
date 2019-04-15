// @flow

import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { SongsStore } from '../../stores/songs';
import SongsTable from './SongsTable';

const SongsTableContainer: React.ComponentType<{}> = inject('songs')(
  observer(({ songs: songsStore, ...props }: { songs: SongsStore }) => {
    return <SongsTable {...props} songs={songsStore.songs || []} />;
  }),
);

export default SongsTableContainer;
