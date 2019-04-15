// @flow

import React from 'react';

import { type Song } from '../../types';
import SongsTable from '../SongsTable';

type PlaylistSongsProps = {
  songs: Song[],
};

const PlaylistSongs = ({ songs }: PlaylistSongsProps) => {
  return <SongsTable hideActions songs={songs} />;
};

export default PlaylistSongs;
