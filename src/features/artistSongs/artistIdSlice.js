import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  artistId: "",
  status: 'idle',
  error: null,
};

export const artistIdSlice = createSlice({
  name: 'artistId',
  initialState,
  reducers: {
    getIdSuccess(state, action) {
      state.artistId = action.payload;
      state.status = 'succeeded';
    },
    getIdFailed(state, action) {
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

export const { getIdSuccess, getIdFailed } =
  artistIdSlice.actions;

export default artistIdSlice.reducer;