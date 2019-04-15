// @flow

import { RouterStore } from 'mobx-react-router';

import { SpotifyModel } from '../models';
import { SongsStore, SongsApi } from './songs';
import { PlaylistsStore, PlaylistsApi } from './playlists';

const spotifyModel = new SpotifyModel();

const routingStore = new RouterStore();
const songsStore = new SongsStore(new SongsApi(), spotifyModel);
const playlistsStore = new PlaylistsStore(new PlaylistsApi(), spotifyModel);

const stores = {
  routing: routingStore,
  songs: songsStore,
  playlists: playlistsStore,
};

export default stores;
