import { storiesOf } from '@storybook/react';
import * as React from 'react';

import SongsTable from './SongsTable';

const songs = [
  {
    id: 'id-1',
    title: 'I, the Mask',
    author: 'In Flames',
    duration: 3.41,
  },
  {
    id: 'id-2',
    title: 'The End',
    author: 'In Flames',
    duration: 3.58,
  },
];

storiesOf('SongsTable', module).add('default', () => (
  <SongsTable songs={songs} />
));
