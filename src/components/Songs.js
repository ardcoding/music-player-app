import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongs } from '../features/songs/songsAsyncActions';
import { Link } from 'react-router-dom';
import { addSong } from '../features/playList/playListSlice';

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
            <Link to={`/detail/${song.id}`} preventScrollReset={true}>
            <img
              alt={song.name}
              src={song.album.images[0].url}
              width={200}
              height={10}
            />
            <h1>{song.name}</h1>
            <p>{song.artists[0].name}</p>
            </Link>
            <button onClick={() => addToPlaylist(song.id)}>Ekle</button>
          </div>

        ))}
      {status === 'failed' && <p>{error}</p>}
    </div>
  );
};

export default Songs;
