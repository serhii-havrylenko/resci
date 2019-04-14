import { observer, inject } from 'mobx-react';

import SongsTable from './SongsTable';

const SongsTableContainer = inject(({ songs }) => ({
  songs: songs.songs,
}))(observer(SongsTable));

export default SongsTableContainer;
