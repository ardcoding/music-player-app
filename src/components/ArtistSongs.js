import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArtist } from "../features/artistSongs/artistSongsDetailAsyncAction";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../features/songDetail/songDetailAsyncAction";

const ArtistSong = () => {
    const artist = useSelector((state) => state.artistId.artistId);
    const status = useSelector((state) => state.artistId.status);
    const error = useSelector((state) => state.artistId.error);
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchArtist(id));
      }
    }, [id, dispatch]);

    return (
        <div className='flex flex-wrap w-9/12 mt-8 m-auto'>
          {status === 'succeeded' &&
              <div className='mx-4 mt-6 my-2'>
                {/* <div className="float-left">
                <h1 className="text-center text-2xl">{artist.name}</h1>
                <img src={details.album.images[0].url} alt={artist.name} width={450} height={450}/>
                <p className="text-center text-lg">{art.artists[0].name}</p>
                </div>
                <div>
                    <audio className="m-auto" src={details.preview_url} controls/>
                </div> */}
              </div>
            }
          {status === 'failed' && <p>{error}</p>}
        </div>
      );
};

export default ArtistSong;
