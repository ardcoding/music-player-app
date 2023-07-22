import { createAsyncThunk } from '@reduxjs/toolkit';
import { getIdSuccess, getIdFailed } from './artistIdSlice';

export const fetchArtist = createAsyncThunk(
  'artistSongs/fetchArtist',
  async (arg, thunkAPI) => {
    try {
      if(!arg) return;
      arg = encodeURIComponent(arg)
      const  ar  = arg.replace(/%22/g,"");
      console.log(arg)
      const url =
        `https://spotify81.p.rapidapi.com/artist_singles?id=${ar}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '6020745c03mshde5289117b51ab6p146346jsn1629a1d281bd',
          'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(url)
      console.log("za" + JSON.stringify(data))
      thunkAPI.dispatch(getIdSuccess(data));
    } catch (error) {
      thunkAPI.dispatch(getIdFailed(error.message));
    }
  }
)