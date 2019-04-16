import SongsStore from './SongsStore';

describe('SongsStore tests', () => {
  const modelMock = {
    songs: [
      {
        id: 'id-1',
        title: 'I, the Mask',
        author: 'In Flames',
        duration: 3.41,
      },
      {
        id: 'id-33',
        title: 'I, the Mask 33',
        author: 'In Flames',
        duration: 3.33,
      },
      {
        id: 'id-2',
        title: 'The End',
        author: 'In Flames',
        duration: 3.58,
      },
    ],
    playlists: [
      {
        id: 'id-11',
        name: 'Playlist 1',
        songs: ['id-1', 'id-33'],
      },
      {
        id: 'id-21',
        name: 'Yet another playlist',
        songs: [],
      },
    ],
  };
  let apiMock;
  let store;

  beforeEach(() => {
    apiMock = {
      fetchSongs: jest.fn(() => Promise.reject()),
    };
    store = new SongsStore(apiMock, modelMock);
  });

  test('should return proper songs', () => {
    expect(store.songs).toEqual(modelMock.songs);
  });

  test('should return proper playlists for first song', () => {
    expect(store.getPlaylistsForSong('id-1')).toEqual([modelMock.playlists[1]]);
  });

  test('should return proper playlists for second song', () => {
    expect(store.getPlaylistsForSong('id-2')).toEqual(modelMock.playlists);
  });

  test('should return proper songs for first playlist', () => {
    expect(store.songsByPlaylist('id-11')).toEqual([
      modelMock.songs[0],
      modelMock.songs[1],
    ]);
  });

  test('should return proper songs for second playlist', () => {
    expect(store.songsByPlaylist('id-21')).toEqual([]);
  });

  test('should call fetch from API when requests', async () => {
    await store.fetchSongs();

    expect(apiMock.fetchSongs).toHaveBeenCalledTimes(1);
  });
});
