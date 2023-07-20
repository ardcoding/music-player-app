import React, { useEffect } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopSongs } from '../features/topSongs/topSongsAsyncActions';

const TopSongs = () => {
  const topsongs = useSelector((state) => state.topsongs.topsongs);
  const status = useSelector((state) => state.topsongs.status);
  const error = useSelector((state) => state.topsongs.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTopSongs());
    }
  }, [status, dispatch]);

  return (
    <div className=' w-3/12'>
      <h1 className='text-center font-bold mt-12 text-3xl'>Top 20 Songs</h1>
      {status === 'succeeded' &&
        topsongs.map((song, index) => (
          <div key={index} className='m-4'>
            <strong className='float-left mr-2'>
              {song.chartEntryData.currentRank}
            </strong>
            <span className='float-left mr-2 text-xs'>
              {song.chartEntryData.entryStatus === 'NO_CHANGE' ? (
                <ArrowRightIcon className='text-blue-700' />
              ) : song.chartEntryData.entryStatus === 'MOVED_UP' ? (
                <ArrowDropUpIcon className='text-green-500' />
              ) : (
                <ArrowDropDownIcon className='text-red-700' />
              )}
            </span>
            <p>{song.chartEntryData.previousRank}</p>
            <img
              className='float-left mr-2'
              alt={'top' + index}
              src={song.trackMetadata.displayImageUri}
              width={20}
              height={20}
            />
            <p>
              {song.trackMetadata.trackName}{' '}
              {song.trackMetadata.artists[0].name}
            </p>
            <p></p>
          </div>
        ))}
      {status === 'failed' && <p>{error}</p>}
    </div>
  );
};

export default TopSongs;
