import { SimpleGrid } from '@mantine/core';
import MyResponsiveBar from './bar/Bar';
import MyResponsivePie from './pie/Pie';
import MyResponsiveBump from './bump/Bump';
import MyResponsiveRadar from './radar/Radar';
import bumpData from './bump/bump-data.json';
import radarData from './radar/radar-data.json';

function GraphSection( { timePlayed } ) {

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
        <>
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

        </>
    );
}

export default GraphSection;