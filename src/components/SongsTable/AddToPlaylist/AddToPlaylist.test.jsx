import { MenuItem, IconButton } from '@material-ui/core';
import { mount } from 'enzyme';
import { Router } from 'react-router';
import * as React from 'react';
import { createBrowserHistory } from 'history';

import AddToPlaylist from './AddToPlaylist';

jest.mock('popper.js', () => {
  const PopperJS = jest.requireActual('popper.js');

  return class {
    static placements = PopperJS.placements;

    constructor() {
      return {
        destroy: () => {},
        scheduleUpdate: () => {},
      };
    }
  };
});

describe('<AddToPlaylist /> tests', () => {
  const wrapWithRouter = C => (
    <Router history={createBrowserHistory()}>{C}</Router>
  );

  const props = {
    songId: '123',
    onAddToPlaylist: jest.fn(),
    playlists: [{ id: '1', name: 'Death metal' }, { id: '2', name: 'Trance' }],
  };

  test('should match snapshot', () => {
    const wrapper = mount(<AddToPlaylist {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot for open popup', () => {
    const wrapper = mount(wrapWithRouter(<AddToPlaylist {...props} />));

    wrapper.find(IconButton).simulate('click');

    expect(wrapper).toMatchSnapshot();
  });

  test('should render MenuItems for 2 playlists and default link', () => {
    const wrapper = mount(wrapWithRouter(<AddToPlaylist {...props} />));

    wrapper.find(IconButton).simulate('click');

    expect(wrapper.find(MenuItem)).toHaveLength(3);
  });

  test('should render link to new item only when no playlists passed', () => {
    const wrapper = mount(
      wrapWithRouter(<AddToPlaylist {...props} playlists={[]} />),
    );

    wrapper.find(IconButton).simulate('click');

    expect(wrapper.find(MenuItem)).toHaveLength(1);
    expect(wrapper.find(MenuItem).text()).toBe(' new');
  });

  test('should call onAddToPlaylist with proper params', () => {
    const onAddToPlaylistMock = jest.fn();
    const wrapper = mount(
      wrapWithRouter(
        <AddToPlaylist {...props} onAddToPlaylist={onAddToPlaylistMock} />,
      ),
    );

    wrapper.find(IconButton).simulate('click');
    wrapper
      .find(MenuItem)
      .first()
      .simulate('click');

    expect(onAddToPlaylistMock).toHaveBeenCalledTimes(1);
    expect(onAddToPlaylistMock).toHaveBeenCalledWith(
      props.playlists[0].id,
      props.songId,
    );
  });
});
