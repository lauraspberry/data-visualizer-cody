import React, { useState } from 'react';
import './App.css';

function App() {

  const [username, setUsername] = useState("");
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://overfast-api.tekrop.fr/players/${username}`);
      
      if (response.status === 404) {
        setError('Player not found. Please check the Battle Tag and try again.');
        setPlayerData(null);
      } else {
        const data = await response.json();
        setPlayerData(data.summary);
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
        <h1>Overwatch Player Search</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Overwatch Battle Tag"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {playerData && (
          <div>
            <h2>Player Information</h2>
            <pre>{JSON.stringify(playerData, null, 2)}</pre>
            <div className='player-info'>
              <img src={playerData.avatar} alt="avatar" className='avatar'/>
              <h4 className='username'>{playerData.username}</h4>
              <img src={playerData.endorsement.frame} alt="endorsement-frame" className="endorsement-frame"/>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
