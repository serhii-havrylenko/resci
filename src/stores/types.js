// @flow
import { type Playlist } from '../types';

export interface ISongsApi {
  fetchSongs(): Promise<Response>;
}

export interface IPlaylistsApi {
  fetchPlaylists(): Promise<Response>;
  addToPlaylist(
    id: $PropertyType<Playlist, 'id'>,
    body: Playlist,
  ): Promise<Response>;
  addPlaylist(body: Playlist): Promise<Response>;
}
