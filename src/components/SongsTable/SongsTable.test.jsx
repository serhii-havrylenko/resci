import { mount } from 'enzyme';
import * as React from 'react';

import SongsTable from './SongsTable';

jest.mock('./AddToPlaylist');

describe('<SongsTable /> tests', () => {
  const props = {
    songs: [
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
    ],
  };

  test('should match snapshot with add button', () => {
    const wrapper = mount(<SongsTable {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot with hidden actions', () => {
    const wrapper = mount(<SongsTable {...props} hideActions />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should not render any songs when no songs passed', () => {
    const wrapper = mount(<SongsTable {...props} songs={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
