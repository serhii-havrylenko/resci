// @flow

import * as React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export type PlaylistAddProps = {
  onDialogClose: () => void,
  onCreateClick: (name: string) => void,
};
type PlaylistAddState = {
  nameError: boolean,
};

class PlaylistAdd extends React.Component<PlaylistAddProps, PlaylistAddState> {
  state = {
    nameError: false,
  };

  nameRef = null;

  constructor(props: PlaylistAddProps) {
    super(props);

    this.nameRef = React.createRef<HTMLInputElement>();
  }

  handleCreateClick = () => {
    const { onDialogClose, onCreateClick } = this.props;

    if (!this.nameRef || !this.nameRef.current) {
      return;
    }

    // eslint-disable-next-line prefer-destructuring
    const value = this.nameRef.current.value;

    if (!value) {
      this.setState({ nameError: true });
      return;
    }

    this.setState({ nameError: false });

    onCreateClick(value);

    onDialogClose();
  };

  render() {
    const { onDialogClose } = this.props;
    const { nameError } = this.state;

    return (
      <Dialog
        open
        onClose={onDialogClose}
        aria-labelledby="simple-dialog-title"
      >
        <DialogTitle id="simple-dialog-title">Create new playlist</DialogTitle>
        <Card>
          <CardContent>
            <TextField
              margin="dense"
              inputRef={this.nameRef}
              label="Name"
              required
              type="text"
              error={nameError}
              helperText={nameError && 'This field is required'}
            />
          </CardContent>
          <CardActions>
            <Button onClick={this.handleCreateClick}>Create</Button>
          </CardActions>
        </Card>
      </Dialog>
    );
  }
}
export default PlaylistAdd;
