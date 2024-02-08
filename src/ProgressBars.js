import { Box, Group, Progress, Table, Text, Title } from '@mantine/core';

function ProgressBars( {playerData } ) {

    const career_stats = playerData.stats.console.quickplay.career_stats;

    const all_characters = ["ana", "ashe", "baptiste", "bastion", "brigitte", "cassidy", "dva", "echo", "genji", "hanzo", "illari", "junker-queen", "junkrat", "kiriko", "lifeweaver", "lucio", "mauga", "mei", "mercy", "moira", "orisa", "pharah", "ramattra", "reaper", "reinhardt", "roadhog", "sigma", "sojourn", "soldier-76", "sombra", "symmetra", "torbjorn", "tracer", "venture", "widowmaker", "winston", "wrecking-ball", "zarya", "zenyatta"] 

    const career_stats_to_hero_stats = all_characters.map(character => ({
        name: character,
        time_played: career_stats[character]?.filter(item => item.category === "game")[0].stats?.filter(item => item.key === "time_played")[0]?.value,
        games_played: career_stats[character]?.filter(item => item.category === "game")[0].stats?.filter(item => item.key === "games_played")[0]?.value,
        games_won: career_stats[character]?.filter(item => item.category === "game")[0].stats?.filter(item => item.key === "games_won")[0]?.value,
        // hero_wins: career_stats[character]?.filter(item => item.category === "game")[0].stats?.filter(item => item.key === "hero_wins")[0]?.value,
        // win_percentage: career_stats[character]?.filter(item => item.category === "game")[0].stats?.filter(item => item.key === "win_percentage")[0]?.value,
        // games_lost: career_stats[character]?.filter(item => item.category === "game")[0].stats?.filter(item => item.key === "games_lost")[0]?.value,
        // dict: career_stats[character]?.filter(item => item.category === "game")[0].stats,
    }));

    function OverviewCard({my_dict}) {
        return (
            <>
                <Title order={4}>{my_dict.label}: </Title>
                <Text size="lg">{my_dict.value}</Text>
                <div class="progress-bar-container">
                    <Progress value={my_dict.value/ 33895 * 100} />
                </div>
            </>
        )
    }

    const elements = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
      ];

      const rows = elements.map((element) => (
        <Table.Tr key={element.name}>
          <Table.Td>{element.position}</Table.Td>
          <Table.Td>{element.name}</Table.Td>
          <Table.Td>{element.symbol}</Table.Td>
          <Table.Td>{element.mass}</Table.Td>
        </Table.Tr>
      ));

      const hero_rows = career_stats_to_hero_stats.map((hero) => (
        <Table.Tr key={hero.name}>
          <Table.Td>{hero.name}</Table.Td>
          <Table.Td>
            {hero.time_played}
            <div class="progress-bar-container">
                <Progress value={hero.time_played / 33895 * 100} w={"150px"}/>
            </div>
        </Table.Td>
        <Table.Td>
            {hero.games_played}
            <div class="progress-bar-container">
                <Progress value={hero.games_played / 65 * 100}  w={"150px"}/>
            </div>
        </Table.Td>
        <Table.Td>
            {hero.games_won}
            <div class="progress-bar-container">
                <Progress value={hero.games_won / 36 * 100}  w={"150px"}/>
            </div>
        </Table.Td>
        </Table.Tr>
      ));
    

    return (
        <>
        <Box miw={700} p="xl" mx="auto">
            <Title 
                order={3} style={{ paddingLeft: "12px", paddingBottom: "12px" }} c="gray" >
                Hero Breakdown
            </Title>
            
            <Table>
                <Table.Thead>
                    <Table.Tr>
                    <Table.Th>Hero</Table.Th>
                    <Table.Th>Time Played</Table.Th>
                    <Table.Th>Games Played</Table.Th>
                    <Table.Th>Games Won</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{hero_rows}</Table.Tbody>
            </Table>

            {/* <Box p="lg">
                {career_stats_to_hero_stats.map((item) => (
                    <>
                    <Title order={3}>{item?.name} </Title>
                    {item.dict?.filter(item2 => item2.key === "time_played").map(item2 => {
                        return <OverviewCard my_dict={item2}></OverviewCard>
                    })}
                    </>
                ))}
            </Box> */}
            {/* <OverviewCard my_dict={item}></OverviewCard> */}
            {/* <pre>{JSON.stringify(career_stats_to_hero_stats, null, 2)}</pre> */}
        </Box>
        </>
  );
}

export default ProgressBars;