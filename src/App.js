import React, { useState } from 'react';
import './App.css';
import MyResponsiveBar from './bar/Bar';
import MyResponsivePie from './pie/Pie';
// import data from './bar/bar-data.json';
// import pieData from './pie/pie-data.json';

function App() {

  const [username, setUsername] = useState("");
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState('');
  const [apiData, setApiData] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://overfast-api.tekrop.fr/players/${username}`);
      
      if (response.status === 404) {
        setError('Player not found. Please check the Battle Tag and try again.');
        setPlayerData(null);
      } else {
        const data = await response.json();
        setPlayerData(data);
        setApiData(data.stats.console.quickplay.heroes_comparisons.time_played.values);
        setError('');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while fetching data. Please try again.');
      setPlayerData(null);
    }
  };

  const transformData = () => {
    // Map over the API data and transform it
    const transformedData = apiData.map(item => ({
      id: item.hero,
      label: item.hero,
      value: item.value,
      color: `hsl(144, 70%, 50%)`, // You can customize the color as needed
    }));

    return transformedData;
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
            <div className='player-info'>
              <img src={playerData.summary.avatar} alt="avatar" className='avatar'/>
              <h4 className='username'>{playerData.summary.username}</h4>
              <img src={playerData.summary.endorsement.frame} alt="endorsement-frame" className="endorsement-frame"/>
            </div>
            <h2>graphs:</h2>
            <div className='graph-container'>
              <MyResponsiveBar data={apiData}></MyResponsiveBar>
            </div>
            <div className='graph-container'>
              <MyResponsivePie data={transformData()}></MyResponsivePie>
            </div>
            <h2>data i want:</h2>
            {playerData.stats.console.quickplay.heroes_comparisons.time_played.values.map((pair) => {
              return <p>{pair.hero} and {pair.value}</p>;
            })}
            <h2>data dump:</h2>
            <pre>{JSON.stringify(playerData, null, 2)}</pre>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
