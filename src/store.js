import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './features/songs/songsSlice';
import detailsReducer from './features/songDetail/songDetailSlice';
import topSongsReducer from './features/topSongs/topSongsSlice';
import artistIdReducer from './features/artistSongs/artistIdSlice';
import playListReducer from './features/playList/playListSlice';

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    topsongs: topSongsReducer,
    details: detailsReducer,
    artistId: artistIdReducer,
    playlist: playListReducer
  },
  
});