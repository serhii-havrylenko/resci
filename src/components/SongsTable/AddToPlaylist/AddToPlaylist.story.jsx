import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import * as React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import AddToPlaylist from './AddToPlaylist';

const playlists = [
  { id: '1', name: 'Death metal' },
  { id: '2', name: 'Trance' },
];

storiesOf('AddToPlaylist', module).add('default', () => (
  <Router history={createBrowserHistory()}>
    <AddToPlaylist
      playlists={playlists}
      songId={text('Song id', '123')}
      onAddToPlaylist={action('addClicked')}
    />
  </Router>
));
