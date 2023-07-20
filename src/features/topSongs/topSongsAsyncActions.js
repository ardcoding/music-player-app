import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTopSongsSuccess, getTopSongsFailed } from './topSongsSlice';

export const fetchTopSongs = createAsyncThunk(
  'topSongs/fetchTopSongs',
  async (arg, thunkAPI) => {
    try {
      const url = 'https://spotify81.p.rapidapi.com/top_200_tracks';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':'a2b2a3ea26msh1a33311b6569c95p1146dcjsn74d969fa838b',
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
