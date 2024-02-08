import { Box, SimpleGrid, Title } from '@mantine/core';
import MyResponsiveBar from './bar/Bar';
import MyResponsivePie from './pie/Pie';
import MyResponsiveRadar from './radar/Radar';
// import radarData from './radar/radar-data.json';

function GraphSection( {  playerData } ) {

    const career_stats = playerData.stats.console.quickplay.career_stats;
    const timePlayed = playerData.stats.console.quickplay.heroes_comparisons.time_played.values.filter(item => item.value > 2000);
    
    /** BEGIN radar graph: DPS characters **/
    const dps_characters = ["reaper", "soldier-76", "hanzo", "tracer"];
    const dps_keys = ["deaths_avg_per_10_min", "eliminations_avg_per_10_min", "final_blows_avg_per_10_min"]

    const career_stats_to_averages = dps_characters.map(dps_char => ({
      name: dps_char,
      dict: career_stats[dps_char].filter(item => item.category === "average")[0].stats.filter(item => dps_keys.includes(item.key)),
    }));

    const dps_averages = [];

    career_stats_to_averages.forEach(hero => {
        hero.dict.forEach(stat => {
          let statEntry = dps_averages.find(entry => entry.statistic === stat.label);
          if (!statEntry) {
            statEntry = { statistic: stat.label };
            dps_averages.push(statEntry);
          }
          statEntry[hero.name] = stat.value;
        });
    });
    
    /** BEGIN radar graph: healer characters **/
    const healer_characters = ["mercy", "ana", "moira"];
    const healer_keys = ["assists_avg_per_10_min", "eliminations_avg_per_10_min", "deaths_avg_per_10_min"];

    const healer_career_stats_to_averages = healer_characters.map(dps_char => ({
      name: dps_char,
      dict: career_stats[dps_char].filter(item => item.category === "average")[0].stats.filter(item => healer_keys.includes(item.key)),
    }));

    const healer_averages = [];

    healer_career_stats_to_averages.forEach(hero => {
        hero.dict.forEach(stat => {
          let statEntry = healer_averages.find(entry => entry.statistic === stat.label);
          if (!statEntry) {
            statEntry = { statistic: stat.label };
            healer_averages.push(statEntry);
          }
          statEntry[hero.name] = stat.value;
        });
    });

    /** BEGIN pie chart: time played **/
    const transformToPieData = () => {
        const transformedPieData = timePlayed
        .map(item => ({
          id: item.hero,
          label: item.hero,
          value: item.value,
          color: `hsl(144, 70%, 50%)`,
        }));
    
        return transformedPieData;
    };
    
    return (
        <>
        <Box miw={700} p="xl" mx="auto">
            <Title 
                order={2} style={{ paddingLeft: "12px", paddingBottom: "12px" }} >
                Graphs
            </Title>
            <Title 
                order={3} style={{ paddingLeft: "12px", paddingBottom: "12px" }} c="gray" >
                Averages: Radar Graph
            </Title>
            <SimpleGrid 
                cols={2}
            >
              <div className='graph-container'>
                  <MyResponsiveRadar data={dps_averages} keys={dps_characters}></MyResponsiveRadar>
              </div>
              <div className='graph-container'>
                  <MyResponsiveRadar data={healer_averages} keys={healer_characters}></MyResponsiveRadar>
              </div>
            </SimpleGrid>
            <Title 
                order={3} style={{ paddingLeft: "12px", paddingBottom: "12px" }} c="gray" >
                Time Played: Bar Graph
            </Title>
            <div className='graph-container'>
                <MyResponsiveBar data={timePlayed}></MyResponsiveBar>
            </div>
            <Title 
                order={3} style={{ padding: "12px" }} c="gray" >
                Time Played: Pie Chart
            </Title>
            <div className='graph-container'>
                <MyResponsivePie data={transformToPieData()}></MyResponsivePie>
            </div>
            {/* <pre>{JSON.stringify(career_stats_to_averages, null, 2)}</pre> */}
        </Box>
        </>
    );
}

export default GraphSection;