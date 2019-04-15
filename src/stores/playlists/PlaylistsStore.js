// @flow
import { action } from 'mobx';

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
}
