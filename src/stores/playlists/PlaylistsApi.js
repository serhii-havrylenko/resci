// @flow

import { RESOURCES_URL, RESOURCES } from '../../constants';
import { type Playlist } from '../../types';
import { type IPlaylistsApi } from '../types';

class PlaylistsApi implements IPlaylistsApi {
  fetchPlaylists = () => fetch(`${RESOURCES_URL}${RESOURCES.playlists.all}`);

  addToPlaylist = (id: $PropertyType<Playlist, 'id'>, body: Playlist) =>
    fetch(
      `${RESOURCES_URL}${RESOURCES.playlists.updateOne}`.replace(':ID', id),
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    );

  addPlaylist = (body: Playlist) =>
    fetch(`${RESOURCES_URL}${RESOURCES.playlists.add}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
}

export default PlaylistsApi;
