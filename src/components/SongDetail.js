import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "../features/songDetail/songDetailAsyncAction";
import { fetchArtist } from "../features/artistSongs/artistSongsDetailAsyncAction";
import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";

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
    },[id,status, dispatch]);

    if(status === "succeeded"){
      const artistid = JSON.stringify(details.artists[0].id)

       dispatch(fetchArtist(artistid))
    }

    return (
        <div className='flex flex-wrap w-9/12 mt-8 m-auto align-items'>
          {status === 'succeeded' &&
              <div className='mx-4 ml-24 mt-3 my-2 ml-0'>
                <div className="float-left">
                <h1 className="text-center text-2xl">{details.name}</h1>
                <img className="m-auto" src={details.album.images[0].url} alt={details.name} width={450} height={450}/>
                <p className="text-center text-lg">{details.artists[0].name}</p>
                  <Card
                    variant="outlined"
                    className="m-auto my-8"
                    sx={{
                      p: 1,
                      display: 'flex',
                      width:"50%",
                      flexDirection: { xs: 'column', sm: 'row' },
                    }}
                  >
                    <CardMedia component="img" width="124" height="124" src={details.album.images[0].url} alt={details.name}
                      sx={{
                        borderRadius: 0.5,
                        width: 'clamp(124px, (304px - 100%) * 999 , 100%)',
                      }}
                    />
                    <Box sx={{ alignSelf: 'center', px: { xs: 0, sm: 2 } }}>
                      <Typography variant="body1" color="text.primary" fontWeight={600}
                        sx={{
                          textAlign: { xs: 'center', sm: 'start' },
                          mt: { xs: 1.5, sm: 0 },
                        }}
                      >
                        {details.name}
                      </Typography>
                      
                      <Typography  component="div" variant="caption"  color="text.secondary" fontWeight={500}
                        sx={{ textAlign: { xm: 'center', sm: 'start' } }}
                      >
                        {details.artists[0].name}
                      </Typography>
                      <audio src={details.preview_url} controls/>
                      <Stack direction="row" spacing={1}
                        sx={{
                          mt: 2,
                          justifyContent: { xs: 'space-between', sm: 'flex-start' },
                        }}
                      >
                      
                      </Stack>

                    </Box>
                  </Card>
                </div>
                </div>
            }
          {status === 'failed' && <p>{error}</p>}
        </div>
      );
};

export default SongDetail;
