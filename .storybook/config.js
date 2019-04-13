import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import './addons';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.story\.jsx?$/);
function loadStories() {
  addDecorator(withKnobs);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
