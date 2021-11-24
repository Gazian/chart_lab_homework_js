import React, { useState, useEffect } from 'react';
import SongList from '../components/SongList';
import SongDetail from '../components/SongDetail';
import SongSelector from '../components/SongSelect';

const SongContainer = () => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);

    useEffect(() => {
      getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    const onSongClick = function(song){
        setSelectedSong(song);
    }

    const onSongSelected = function(song){
        setSelectedSong(song);
    }

    return (
        <div className="main-container">
            <SongSelector songs={songs} onSongSelected={onSongSelected} />
            {selectedSong ? <SongDetail selectedSong={selectedSong} /> : null}
            
        </div>
    )
}

export default SongContainer;