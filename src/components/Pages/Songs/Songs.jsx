// @flow
import React from 'react';
import { inject } from 'mobx-react';

import { SongsTableContainer } from '../../SongsTable';
import { SongsStore } from '../../../stores/songs';

@inject('songs')
class Songs extends React.Component<{ songs: SongsStore }> {
  componentWillMount() {
    const { songs } = this.props;

    songs.fetchSongs();
  }

  render() {
    return <SongsTableContainer />;
  }
}

export default Songs;
