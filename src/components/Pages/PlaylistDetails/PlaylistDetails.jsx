// @flow
import { Location } from 'history';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { get, replace } from 'lodash';

import { PlaylistSongsContainer } from '../../PlaylistSongs';
import { SongsStore } from '../../../stores/songs';
import { ROUTES } from '../../../constants';

type PlaylistDetailsProps = {
  // eslint-disable-next-line react/require-default-props
  routing?: { location?: Location },
  songs: SongsStore,
};

const getPlaylistIDFromLocation = (location: Location) => {
  return replace(location.pathname, `${ROUTES.PLAYLISTS}/`, '');
};

@inject('songs')
@inject('routing')
@observer
class PlaylistDetails extends React.Component<PlaylistDetailsProps> {
  componentWillMount() {
    const { songs } = this.props;

    songs.fetchSongs();
  }

  render() {
    const id = getPlaylistIDFromLocation(get(this.props, 'location'));

    return <PlaylistSongsContainer id={id} />;
  }
}

export default PlaylistDetails;
