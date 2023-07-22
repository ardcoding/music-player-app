import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../features/playList/playListSlice";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Delete } from '@mui/icons-material';


const Playlist = () => {
  const songs = useSelector((state) => state.songs.songs);
  const playlist = useSelector((state) => state.playlist.myfavs); 
  const dispatch = useDispatch();

  const removeFromPlaylist = (songId) => {
    dispatch(removeSong(songId)); 
  };

  const renderPlayList = () => {
    try{
      if(playlist !== []){
     return playlist.map((songId) => {
      const song = songs.find((song) => song.id === songId);
      return (
        <div key={song.id} className='mx-4 mt-6 my-2'>
        <Link to={`/detail/${song.id}`}>
        <img
          alt={song.name}
          src={song.album.images[0].url}
          width={200}
          height={10}
        />
        <h1>{song.name}</h1>
        <p>{song.artists[0].name}</p>
        </Link>
        <Button style={{borderColor:"red", color:"red "}} variant="outlined" startIcon={<Delete className='text-red-500' />} onClick={() => removeFromPlaylist(song.id)}>Sil</Button>
      </div>
      )
    })}
      else{
        return (
          <div className="m-auto flex flex-wrap">
         <h2 className="container text-center m-auto text-3xl font-bold mt-4">Favorilerde Şarkınız Bulunmamaktadır</h2>
          </div>
        )
      }
    }
  catch(error){
    console.error("Hata");
  }
  }

  return (
    <div className="m-auto flex flex-wrap">
      <h2 className="container text-center m-auto text-3xl font-bold my-4">My Favorites</h2>
      <div className='flex flex-wrap mt-8 m-auto text-center center'>
        {renderPlayList()}
      </div>
    </div>
  );
};

export default Playlist;
