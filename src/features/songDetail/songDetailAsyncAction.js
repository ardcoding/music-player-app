import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDetailsSuccess, getDetailsFailed } from './songDetailSlice';
import { useSearchParams } from 'react-router-dom';


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
            'a2b2a3ea26msh1a33311b6569c95p1146dcjsn74d969fa838b',
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