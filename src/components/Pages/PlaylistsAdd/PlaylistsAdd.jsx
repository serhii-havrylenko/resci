// @flow
import { observer, inject } from 'mobx-react';
import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

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
    return (
      <Dialog
        open
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
      >
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <div>Form will be here</div>
      </Dialog>
    );
  }
}

export default PlaylistsAdd;
