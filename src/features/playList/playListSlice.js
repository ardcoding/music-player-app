import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myfavs: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState, 
  reducers: {
   
    addSong: (state, action) => {
      state.myfavs = [...state.myfavs, action.payload]; 
    },
   
    removeSong: (state, action) => {
      state.myfavs= state.myfavs.filter((songId) => songId !== action.payload); 
    },
  },
});

export const { addSong, removeSong } = playlistSlice.actions; 
export default playlistSlice.reducer; 
