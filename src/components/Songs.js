import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongs } from '../features/songs/songsAsyncActions';
import { addSong } from '../features/playList/playListSlice';
import { Button } from '@mui/material';
import { Favorite } from '@mui/icons-material';

const Songs = () => {
  const songs = useSelector((state) => state.songs.songs);
  const status = useSelector((state) => state.songs.status);
  const error = useSelector((state) => state.songs.error);
  const dispatch = useDispatch();


  const addToPlaylist = (songId) => {
    dispatch(addSong(songId)); 
    console.log(songId)
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSongs());
    }
  }, [status, dispatch]); 

  return (
    <div className='flex flex-wrap w-9/12 mt-8'>
      {status === 'succeeded' &&
        songs.map((song, index) => (
          
          <div key={index} className='mx-4 mt-6 my-2'>
            <a href={`/detail/${song.id}`}>
            <img
              alt={song.name}
              src={song.album.images[0].url}
              width={200}
              height={10}
            />
            <h1>{song.name}</h1>
            <p>{song.artists[0].name}</p>
            </a>
            <Button style={{borderColor:"purple", color:"purple"}} variant="outlined" startIcon={<Favorite className='text-purple-500' />} onClick={() => addToPlaylist(song.id)}>Ekle</Button>
          </div>

        ))}
      {status === 'failed' && <p>{error}</p>}
    </div>
  );
};

export default Songs;
