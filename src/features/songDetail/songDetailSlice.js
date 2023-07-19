import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: "",
  status: 'idle',
  error: null,
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    getDetailsSuccess(state, action) {
      state.details = action.payload;
      state.status = 'succeeded';
    },
    getDetailsFailed(state, action) {
      state.error = action.payload;
      state.status = 'failed';
    },
    clearDetails(state) {
      state.details = null;
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const { getDetailsSuccess, getDetailsFailed, clearDetails } =
  detailsSlice.actions;

export default detailsSlice.reducer;