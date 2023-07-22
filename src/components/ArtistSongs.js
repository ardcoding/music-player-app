import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArtist } from "../features/artistSongs/artistSongsDetailAsyncAction";
import { useParams } from "react-router-dom";

const ArtistSong = () => {
    const artist = useSelector((state) => state.artistId.artistId);
    const status = useSelector((state) => state.artistId.status);
    const error = useSelector((state) => state.artistId.error);
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchArtist(artist));
      }
    }, [id,artist,status, dispatch]);

    return (
        <div className=''>
          <h1 className="text-center my-4 text-xl">More From Artist</h1>
          {status === 'succeeded' &&
          
          artist.data.artist.discography.singles.items.map( (single, index) => 
              <div className='mx-4 mt-6 '>
                <div className="">
                <img className="float-left" key={index} alt={single.releases.items[0].name} src={single.releases.items[0].coverArt.sources[0].url} width={50} height={50} />
                <p className="text-center text-md">{single.releases.items[0].name}</p><br/>
                <hr style={{borderWidth:"1px"}}/>
                </div>
              </div>
          )
            }
          {status === 'failed' && <p>{error}</p>}
        </div>
      );
};

export default ArtistSong;
