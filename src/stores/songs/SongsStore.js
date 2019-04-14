// @flow
import { observable, action } from 'mobx';

import { ISongsApi } from '../types';

export default class SongsStore {
  @observable songs = [];

  songsApi: ISongsApi;

  constructor(songsApi: ISongsApi) {
    this.songsApi = songsApi;
  }

  @action fetchSongs = async () => {
    this.songsApi
      .fetchSongs()
      .then(this.onFetchSongsData)
      .then(this.onFetchResults);
  };

  @action onFetchSongsData = (response: Response) => {
    return response.json();
  };

  @action onFetchResults = (response: Response) => {
    this.songs = response;
  };
}
