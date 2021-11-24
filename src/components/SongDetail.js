import React from 'react';
import SongContainer from '../containers/SongContainer';

const SongDetail = ({selectedSong}) => {
  return (
      
      <div>
          <h3></h3>
          <h3>{selectedSong["im:name"]["label"]}</h3>
          <h4>{selectedSong["im:artist"]["label"]}</h4>
      </div>
  )
}

export default SongDetail;