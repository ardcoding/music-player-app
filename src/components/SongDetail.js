import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "../features/songDetail/songDetailAsyncAction";

const SongDetail = () => {
    const details = useSelector((state) => state.details.details);
    const status = useSelector((state) => state.details.status);
    const error = useSelector((state) => state.details.error);
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchDetails(id));
      }
    }, [id, dispatch]);

    return (
        <div className='flex flex-wrap w-9/12 mt-8 m-auto'>
          {status === 'succeeded' &&
              <div className='mx-4 mt-6 my-2'>
                <div className="float-left">
                <h1 className="text-center text-2xl">{details.name}</h1>
                <img src={details.album.images[0].url} alt={details.name} width={450} height={450}/>
                <p className="text-center text-lg">{details.artists[0].name}</p>
                </div>
                <div>
                    <audio className="m-auto" src={details.preview_url} controls/>
                </div>
              </div>
            }
          {status === 'failed' && <p>{error}</p>}
        </div>
      );
};

export default SongDetail;
