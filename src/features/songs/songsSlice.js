import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [],
  status: 'idle',
  error: null,
};

export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    getSongsSuccess(state, action) {
      state.songs = action.payload;
      state.status = 'succeeded';
    },
    getSongsFailed(state, action) {
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

export const { getSongsSuccess, getSongsFailed } = songsSlice.actions;

export default songsSlice.reducer;
