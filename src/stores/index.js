import { RouterStore } from 'mobx-react-router';

import { store as songsStore } from './songs';

const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
  songs: songsStore,
};

export default stores;
