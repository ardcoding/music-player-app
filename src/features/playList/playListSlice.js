import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
  name: "playlist",
  initialState: [], 
  reducers: {
   
    addSong: (state, action) => {
      state.push(action.payload); 
      console.log(action.payload)
    },
   
    removeSong: (state, action) => {
      return state.filter((songId) => songId !== action.payload); 
    },
  },
});

export const { addSong, removeSong } = playlistSlice.actions; 
export default playlistSlice.reducer; 
