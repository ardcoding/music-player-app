import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../features/playList/playListSlice";

const Playlist = () => {
  const playlist = useSelector((state) => state.playlist); 
  const dispatch = useDispatch();
  console.log(playlist)

  const removeFromPlaylist = (songId) => {
    dispatch(removeSong(songId)); 
  };

  return (
    <div className="playlist">
      <h2 className="text-2xl text-bold mt-2 text-center">Playlistim</h2>
      <ul>
        {
          
        }
      </ul>
    </div>
  );
};

export default Playlist;
