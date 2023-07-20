import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topsongs: [],
  status: 'idle',
  error: null,
};

export const topsongsSlice = createSlice({
  name: 'topsongs',
  initialState,
  reducers: {
    getTopSongsSuccess(state, action) {
      state.topsongs = action.payload;
      state.status = 'succeeded';
    },
    getTopSongsFailed(state, action) {
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

export const { getTopSongsSuccess, getTopSongsFailed } = topsongsSlice.actions;

export default topsongsSlice.reducer;
