// @flow

export const ROUTES = {
  SONGS: '/songs',
  PLAYLISTS: '/playlists',
  PLAYLISTS_ADD: '/playlists/add',
  FAQ: '/faq',
};

export const RESOURCES_URL = 'http://localhost:3333';
export const RESOURCES = {
  songs: {
    all: '/songs',
  },
  playlists: {
    all: '/playlists',
    add: '/playlists',
    getOne: '/playlists/:ID',
    updateOne: '/playlists/:ID',
  },
};
