import React from 'react'
import SongDetail from './SongDetail'
import ArtistSong from './ArtistSongs'

const Details = () => {
    return (

            <div className='w-10/12 m-auto flex'>
            <SongDetail className='w-3/12'/>
            <ArtistSong className="w-7/12"/>
          </div>
    )
    
  
}
export default Details;