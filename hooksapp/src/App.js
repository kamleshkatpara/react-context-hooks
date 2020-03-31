import React from 'react';
import SongList from './components/SongList';
import NewSongList from './components/NewSongList';

function App() {
  return (
    <div className="App">
      <NewSongList />
      <SongList />
    </div>
  );
}

export default App;
