// @flow

import { RESOURCES_URL, RESOURCES } from '../../constants';
import { type ISongsApi } from '../types';

class SongsApi implements ISongsApi {
  fetchSongs = () => fetch(`${RESOURCES_URL}${RESOURCES.songs.all}`);
}

export default SongsApi;
