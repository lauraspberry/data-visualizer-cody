import { SimpleGrid } from '@mantine/core';
import MyResponsiveBar from './bar/Bar';
import MyResponsivePie from './pie/Pie';
import MyResponsiveBump from './bump/Bump';
import MyResponsiveRadar from './radar/Radar';
import bumpData from './bump/bump-data.json';
import radarData from './radar/radar-data.json';
import { LineChart } from '@mantine/charts';

function GraphSection( {  playerData, timePlayed } ) {

    const career_stats = playerData.stats.console.quickplay.career_stats;

    const dps_characters = ["reaper", "soldier-76", "hanzo", "tracer"];

    const averages = dps_characters.map(dps_char => ({
      name: dps_char,
      dict: career_stats[dps_char].filter(item => item.category === "average")[0].stats,
    }));

    // const transformToRadarData = () => {
    //     const transformedRadarData = dps_characters.map(dps_char => ({
    //       id: item.hero,
    //       label: item.hero,
    //       value: item.value,
    //       color: `hsl(144, 70%, 50%)`, // You can customize the color as needed
    //     }));
    //     return transformedRadarData;
    // }

    const transformToPieData = () => {
        // Map over the API data and transform it
        const transformedPieData = timePlayed
        .filter(item => item.value > 2000)
        .map(item => ({
          id: item.hero,
          label: item.hero,
          value: item.value,
          color: `hsl(144, 70%, 50%)`, // You can customize the color as needed
        }));
    
        return transformedPieData;
    };

    const fruitData = [
        {
          date: 'Mar 22',
          Apples: 2890,
          Oranges: 2338,
          Tomatoes: 2452,
        },
        {
          date: 'Mar 23',
          Apples: 2756,
          Oranges: 2103,
          Tomatoes: 2402,
        },
        {
          date: 'Mar 24',
          Apples: 3322,
          Oranges: 986,
          Tomatoes: 1821,
        },
        {
          date: 'Mar 25',
          Apples: 3470,
          Oranges: 2108,
          Tomatoes: 2809,
        },
        {
          date: 'Mar 26',
          Apples: 3129,
          Oranges: 1726,
          Tomatoes: 2290,
        },
    ];
    
    return (
        <>
            <h2>Graphs:</h2>
            <SimpleGrid 
                // cols={2}
            >
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
              <LineChart
                h={300}
                data={fruitData}
                dataKey="date"
                series={[
                    { name: 'Apples', color: 'indigo.6' },
                    { name: 'Oranges', color: 'blue.6' },
                    { name: 'Tomatoes', color: 'teal.6' },
                ]}
                curveType="linear"
            />

            </SimpleGrid>
            <pre>{JSON.stringify(averages, null, 2)}</pre>

        </>
    );
}

export default GraphSection;