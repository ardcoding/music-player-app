import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTopSongsSuccess, getTopSongsFailed } from './topSongsSlice';

export const fetchTopSongs = createAsyncThunk(
  'topSongs/fetchTopSongs',
  async (arg, thunkAPI) => {
    try {
      const url = 'https://spotify81.p.rapidapi.com/top_200_tracks?country=TR';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':'6020745c03mshde5289117b51ab6p146346jsn1629a1d281bd',
          'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();      
      console.log(data)
      thunkAPI.dispatch(getTopSongsSuccess(data.slice(0, 20)));
    } catch (error) {
      thunkAPI.dispatch(getTopSongsFailed(error.message));
    }
  }
);
