import { storiesOf } from '@storybook/react';
import * as React from 'react';

import AddToPlaylist from './AddToPlaylist';

const playlists = [
  { id: '1', name: 'Death metal' },
  { id: '2', name: 'Trance' },
];

storiesOf('AddToPlaylist', module).add('default', () => (
  <AddToPlaylist playlists={playlists} />
));
