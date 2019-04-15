// @flow
import { action, computed } from 'mobx';

import { SpotifyModel } from '../../models';
import type { Playlist, Song } from '../../types';
import { type IPlaylistsApi } from '../types';

export default class PlaylistsStore {
  playlistsApi: IPlaylistsApi;

  model: SpotifyModel;

  constructor(playlistsApi: IPlaylistsApi, model: SpotifyModel) {
    this.playlistsApi = playlistsApi;
    this.model = model;

    this.fetchPlaylists();
  }

  @computed get playlists() {
    return this.model.playlists;
  }

  @action fetchPlaylists = () => {
    this.playlistsApi
      .fetchPlaylists()
      .then(this.onFetchPlaylistsData)
      .then(this.onFetchResults);
  };

  @action onFetchPlaylistsData = (response: Response) => {
    return response.json();
  };

  @action onFetchResults = (playlists: Playlist[]) => {
    this.model.playlists = playlists;
  };

  @action addToPlaylist = (
    id: $PropertyType<Playlist, 'id'>,
    songId: $PropertyType<Song, 'id'>,
  ) => {
    if (!this.model.playlists) {
      throw new Error('No playlists fetched, create one');
    }

    const playlist = this.model.playlists.find(
      ({ id: playlistId }) => id === playlistId,
    );

    if (!playlist) {
      throw new Error('Playlist not found');
    }

    playlist.songs.push(songId);

    this.playlistsApi.addToPlaylist(id, playlist);
  };

  @action addPlaylist = (name: $PropertyType<Playlist, 'name'>) => {
    let id = 'PID-1';
    if (this.model.playlists && this.model.playlists.length > 0) {
      const nextIDNumber =
        Number(
          this.model.playlists[this.model.playlists.length - 1].id.replace(
            /\w+-/,
            '',
          ),
        ) + 1;
      id = `PID-${nextIDNumber}`;
    }

    const playlist: Playlist = {
      id,
      name,
      songs: [],
    };

    this.playlistsApi.addPlaylist(playlist);
    if (this.model.playlists) {
      this.model.playlists.push(playlist);
    } else {
      this.model.playlists = [playlist];
    }
  };
}
