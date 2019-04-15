// @flow
import { observer, inject } from 'mobx-react';
import React from 'react';

import { PlaylistAddContainer } from '../../PlaylistAdd';

type PlaylistsAddProps = {
  // eslint-disable-next-line react/require-default-props
  routing?: { goBack: () => void },
};

@inject('routing')
@observer
class PlaylistsAdd extends React.Component<PlaylistsAddProps> {
  handleClose = () => {
    const { routing } = this.props;
    if (!routing) {
      return;
    }

    routing.goBack();
  };

  render() {
    return <PlaylistAddContainer onDialogClose={this.handleClose} />;
  }
}

export default PlaylistsAdd;
