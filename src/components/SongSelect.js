import React from 'react';

const SongSelector = ({songs, onSongSelected}) => {

    const handleChange = function(event) {
        const chosenSong = songs[event.target.value];
        onSongSelected(chosenSong);
    }
    
    const songOptions = songs.map((song, index) => {
      return <option value={index} key={index}>{index +1} {song["im:name"]["label"]}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Song</option>
            {songOptions}
        </select>
    )
}

export default SongSelector;