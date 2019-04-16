// @flow
import { action, computed } from 'mobx';
import { createTransformer } from 'mobx-utils';
import { find, intersection, map, filter, includes } from 'lodash';

import { SpotifyModel } from '../../models';
import type { Playlist, Song } from '../../types';
import { type ISongsApi } from '../types';

export default class SongsStore {
  songsApi: ISongsApi;

  model: SpotifyModel;

  constructor(songsApi: ISongsApi, model: SpotifyModel) {
    this.songsApi = songsApi;
    this.model = model;
  }

  @computed get songs() {
    return this.model.songs;
  }

  getPlaylistsForSong = createTransformer((id: $PropertyType<Song, 'id'>) => {
    if (!this.model.playlists) {
      return [];
    }

    return this.model.playlists.filter(
      ({ songs }) => !songs.find(songId => id === songId),
    );
  });

  songsByPlaylist = createTransformer((id: $PropertyType<Playlist, 'id'>) => {
    const playlist = find(this.model.playlists, { id });
    if (!playlist) {
      return [];
    }

    const songIDs = intersection(
      playlist.songs,
      map(this.model.songs, ({ id: songId }) => songId),
    );

    return filter(this.model.songs, ({ id: songId }) =>
      includes(songIDs, songId),
    );
  });

  @action fetchSongs = async () => {
    this.songsApi
      .fetchSongs()
      .then(this.onFetchSongsData)
      .then(this.onFetchResults)
      .catch(console.log);
  };

  @action onFetchSongsData = (response: Response) => {
    return response.json();
  };

  @action onFetchResults = (songs: Song[]) => {
    this.model.songs = songs;
  };
}
