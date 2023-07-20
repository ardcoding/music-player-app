import { createAsyncThunk } from '@reduxjs/toolkit';
import { getIdSuccess, getIdFailed } from './artistIdSlice';

export const fetchArtist = createAsyncThunk(
  'artistSongs/fetchArtist',
  async (arg, thunkAPI) => {
    console.log("z" + arg)
    try {
      const url =
        `https://spotify81.p.rapidapi.com/artist_singles?id=${arg}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            'a2b2a3ea26msh1a33311b6569c95p1146dcjsn74d969fa838b',
          'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data)
      thunkAPI.dispatch(getIdSuccess(data.tracks[0]));
    } catch (error) {
      thunkAPI.dispatch(getIdFailed(error.message));
    }
  }
)