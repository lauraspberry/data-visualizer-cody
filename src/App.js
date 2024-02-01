import React, { useState } from 'react';
import './App.css';
import SearchBar from './Searchbar';
import PlayerInfo from './PlayerInfo'
import playerDataJson from './player-data.json'; // TODO: remove. this should be called from API
import GraphSection from './GraphSection';

function App() {

  const [username, setUsername] = useState("");
  const [playerData, setPlayerData] = useState(playerDataJson); // TODO: change to null
  const [error, setError] = useState('');
  const [timePlayed, setTimePlayed] = useState(playerDataJson.stats.console.quickplay.heroes_comparisons.time_played.values); // TODO: change to empty list

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://overfast-api.tekrop.fr/players/${username}`);
      
      if (response.status === 404) {
        setError('Player not found. Please check the Battle Tag and try again.');
        setPlayerData(null);
      } else {
        const data = await response.json();
        setPlayerData(data);
        setTimePlayed(data.stats.console.quickplay.heroes_comparisons.time_played.values);
        setError('');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while fetching data. Please try again.');
      setPlayerData(null);
    }
  };

  return (
    <div className="App">
      <div>
        <SearchBar username={username} setUsername={setUsername} handleSearch={handleSearch}></SearchBar>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {playerData && (
          <div>
            <PlayerInfo playerData={playerData}></PlayerInfo>
            <GraphSection playerData={playerData} timePlayed={timePlayed} ></GraphSection>
            {/* <pre>{JSON.stringify(playerData, null, 2)}</pre> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
