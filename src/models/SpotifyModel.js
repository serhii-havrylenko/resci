// @flow

import { observable } from 'mobx';

import type { Playlist, Song } from '../types';

export default class SpotifyModel {
  @observable playlists: ?Array<Playlist>;

  @observable songs: ?Array<Song>;
}
