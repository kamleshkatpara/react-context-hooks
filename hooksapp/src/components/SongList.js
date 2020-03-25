import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {

    const [songs, setSongs] = useState([
        { id: 1, title: 'almost home' },
        { id: 2, title: 'memory gospel' },
        { id: 3, title: 'this wild darkness' }
    ]);

    const [age, setAge] = useState(20);

    const addSong = (title) => {
        setSongs([...songs, { id: uuid(), title: title }])
    }

    useEffect(() => {
        console.log('useEffect hook ran', songs);
    }, [songs]);


    useEffect(() => {
        console.log('useEffect hook ran', age);
    }, [age]);


    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>Add 1 to add: {age}</button>
        </div>
    );
}

export default SongList;