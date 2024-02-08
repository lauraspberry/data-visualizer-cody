import React, { useState } from 'react';
import './App.css';
import SearchBar from './Searchbar';
import PlayerInfo from './PlayerInfo'
import playerDataJson from './player-data.json'; // TODO: remove. this should be called from API
import GraphSection from './GraphSection';
import Overview from './Overview';
import ProgressBars from './ProgressBars';
import { AppShell, Title, Group, ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
// ActionIcon, useMantineColorScheme, useComputedColorScheme
import { IconMoon } from '@tabler/icons-react';

function App() {

  const [username, setUsername] = useState("");
  const [playerData, setPlayerData] = useState(playerDataJson); // TODO: change to null
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://overfast-api.tekrop.fr/players/${username}`);
      
      if (response.status === 404) {
        setError('Player not found. Please check the Battle Tag and try again.');
        setPlayerData(null);
      } else {
        const data = await response.json();
        setPlayerData(data);
        setError('');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while fetching data. Please try again.');
      setPlayerData(null);
    }
  };

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <div className="App">
      <AppShell header={{ height: 60 }} >
        <AppShell.Header zIndex={100} direction="row" >
          <Group>
            <Title 
              order={3} style={{ paddingLeft: "12px" }}>
              LevelUpGuac Stats
            </Title>
            <SearchBar username={username} setUsername={setUsername} handleSearch={handleSearch}></SearchBar>
            <ActionIcon
              onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
              variant="default"
              size="xl"
              aria-label="Toggle color scheme"
            >
              <IconMoon stroke={1.5} />
            </ActionIcon>
          </Group>
        </AppShell.Header>
        <AppShell.Main style={{ width: '100%', height: "100%", paddingTop: "60px" }} zIndex={100}>
        <div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {playerData && (
            <div>
              <PlayerInfo playerData={playerData}></PlayerInfo>
              <Overview playerData={playerData}></Overview>
              <GraphSection playerData={playerData} ></GraphSection>
              <ProgressBars playerData={playerData}></ProgressBars>
              {/* <pre>{JSON.stringify(playerData, null, 2)}</pre> */}
            </div>
          )}
        </div>
        </AppShell.Main>
      </AppShell>
    </div>
  );
}

export default App;
