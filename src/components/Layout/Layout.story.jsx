import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Layout from './Layout';

storiesOf('Layout', module).add('to Storybook', () => (
  <Layout routing={{ push: action('Navigate to clicked') }}>Body</Layout>
));
