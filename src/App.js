import React, { useState } from 'react';
import './App.css';
import MyResponsiveBar from './bar/Bar';
import MyResponsivePie from './pie/Pie';
import MyResponsiveBump from './bump/Bump';
import MyResponsiveRadar from './radar/Radar';
import SearchBar from './Searchbar';
import PlayerInfo from './PlayerInfo'
import bumpData from './bump/bump-data.json';
import radarData from './radar/radar-data.json';
import playerDataJson from './player-data.json'; // TODO: remove. this should be called from API

import { SimpleGrid } from '@mantine/core';

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

  const transformToPieData = () => {
    // Map over the API data and transform it
    const transformedPieData = timePlayed.map(item => ({
      id: item.hero,
      label: item.hero,
      value: item.value,
      color: `hsl(144, 70%, 50%)`, // You can customize the color as needed
    }));
    return transformedPieData;
  };

  return (
    <div className="App">
      <div>
        <div>
          <SearchBar username={username} setUsername={setUsername} handleSearch={handleSearch}></SearchBar>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {playerData && (
          <div>
            <PlayerInfo playerData={playerData}></PlayerInfo>
            {/* TODO: abstract graphs section into their own components */}
            <h2>Graphs:</h2>
            <SimpleGrid cols={2}>
              <div className='graph-container'>
                  <MyResponsiveBump data={bumpData}></MyResponsiveBump>
              </div>
              <div className='graph-container'>
                  <MyResponsiveRadar data={radarData}></MyResponsiveRadar>
              </div>
              <div className='graph-container'>
                <MyResponsiveBar data={timePlayed}></MyResponsiveBar>
              </div>
              <div className='graph-container'>
                <MyResponsivePie data={transformToPieData()}></MyResponsivePie>
              </div>
            </SimpleGrid>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
