import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';

import PlaylistAdd from './PlaylistAdd';

storiesOf('PlaylistAdd', module).add('default', () => (
  <PlaylistAdd
    onDialogClose={action('Close clicked')}
    onCreateClick={action('Create clicked')}
  />
));
