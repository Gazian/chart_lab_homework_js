import React from 'react';


const ListItem = ({song, onSongClick}) => {

  const handleClick = function(){
    onSongClick(song);
  }


  return <li onClick={handleClick}>{song["im:name"]["label"]}</li>
}

export default ListItem;