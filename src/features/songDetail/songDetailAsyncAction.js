import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDetailsSuccess, getDetailsFailed } from './songDetailSlice';

export const fetchDetails = createAsyncThunk(
  'songDetail/fetchDetails',
  async (arg, thunkAPI) => {
    console.log(arg)
    try {
      const url =
        `https://spotify81.p.rapidapi.com/tracks?ids=${arg}`;
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
      console.log(data)
      thunkAPI.dispatch(getDetailsSuccess(data.tracks[0]));
    } catch (error) {
      thunkAPI.dispatch(getDetailsFailed(error.message));
    }
  }
)