// @flow
import React from 'react';
import { inject } from 'mobx-react';
import { type Match } from 'react-router';

import { PlaylistSongsContainer } from '../../PlaylistSongs';
import { SongsStore } from '../../../stores/songs';

type PlaylistDetailsProps = {
  // eslint-disable-next-line react/require-default-props
  match: Match,
  songs: SongsStore,
};

@inject('songs')
class PlaylistDetails extends React.Component<PlaylistDetailsProps> {
  componentWillMount() {
    const { songs } = this.props;

    songs.fetchSongs();
  }

  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    if (!id) {
      return <div>Nothing to show</div>;
    }

    return <PlaylistSongsContainer id={id} />;
  }
}

export default PlaylistDetails;
