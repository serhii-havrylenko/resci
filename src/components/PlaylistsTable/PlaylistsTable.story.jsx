import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import PlaylistsTable from './PlaylistsTable';

const playlists = [
  {
    id: 'id-1',
    name: 'Playlist 1',
    songs: [],
  },
  {
    id: 'id-2',
    name: 'Yet another playlist',
    songs: [],
  },
];

storiesOf('PlaylistsTable', module).add('default', () => (
  <Router history={createBrowserHistory()}>
    <PlaylistsTable playlists={playlists} />
  </Router>
));
