import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongs } from '../features/songs/songsAsyncActions';
import { Link } from 'react-router-dom';

const Songs = () => {
  const songs = useSelector((state) => state.songs.songs);
  const status = useSelector((state) => state.songs.status);
  const error = useSelector((state) => state.songs.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSongs());
    }
  }, [status, dispatch]); 

  return (
    <div className='flex flex-wrap w-9/12 mt-8'>
      {status === 'succeeded' &&
        songs.map((song, index) => (
          <Link to={`/detail/${song.id}`} preventScrollReset={true}>
          <div key={index} className='mx-4 mt-6 my-2'>
            <img
              src={song.album.images[0].url}
              width={200}
              height={10}
            />
            <h1>{song.name}</h1>
            <p>{song.artists[0].name}</p>
      
          </div>
          </Link>
        ))}
      {status === 'failed' && <p>{error}</p>}
    </div>
  );
};

export default Songs;
