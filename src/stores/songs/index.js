import SongsStore from './SongsStore';
import SongsApi from './SongsApi';

const store = new SongsStore(new SongsApi());

export { SongsStore, SongsApi, store };
