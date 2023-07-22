import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moresongs: [],
  status: 'idle',
  error: null,
};

export const trSongsSlice = createSlice({
  name: 'moresongs',
  initialState,
  reducers: {
    getTrSongsSuccess(state, action) {
      state.moresongs = action.payload;
      state.status = 'succeeded';
    },
    getTrSongsFailed(state, action) {
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

export const { getTrSongsSuccess, getTrSongsFailed } = trSongsSlice.actions;

export default trSongsSlice.reducer;
