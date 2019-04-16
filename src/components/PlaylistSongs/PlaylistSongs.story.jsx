import { storiesOf } from '@storybook/react';
import * as React from 'react';

import PlaylistSongs from './PlaylistSongs';

const songs = [
  {
    id: 'id-2',
    title: 'The End',
    author: 'In Flames',
    duration: 3.58,
  },
  {
    id: 'id-1',
    title: 'I, the Mask',
    author: 'In Flames',
    duration: 3.41,
  },
];

storiesOf('PlaylistSongs', module).add('default', () => (
  <PlaylistSongs songs={songs} />
));
