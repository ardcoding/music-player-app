import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSongsSuccess, getSongsFailed } from './songsSlice';

export const fetchSongs = createAsyncThunk(
  'songs/fetchSongs',
  async (arg, thunkAPI) => {
    try {
      const url =
        'https://spotify81.p.rapidapi.com/playlist_tracks?id=37i9dQZF1EIWNAuDXZEXar&offset=0&limit=100';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '6020745c03mshde5289117b51ab6p146346jsn1629a1d281bd',
          'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data)
      const names = data.items.slice(0, 25).map((item) => item.track);
      thunkAPI.dispatch(getSongsSuccess(names));
    } catch (error) {
      thunkAPI.dispatch(getSongsFailed(error.message));
    }
  }
);
