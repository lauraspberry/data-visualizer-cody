import { Box, Group, Paper, Text, Title } from '@mantine/core';

function Overview( {playerData } ) {

    const career_stats = playerData.stats.console.quickplay.career_stats;
    const cs_game = career_stats['all-heroes'].find(entry => entry.category === 'game');
    const cs_best = career_stats['all-heroes'].find(entry => entry.category === 'best');

    /** BEGIN cs_game stats **/
    const games_won = cs_game.stats.find(entry => entry.key === 'games_won')
    const games_played = cs_game.stats.find(entry => entry.key === 'games_played')
    const hero_wins = cs_game.stats.find(entry => entry.key === 'hero_wins')

    /** BEGIN cs_best stats **/
    const elims_in_game = cs_best.stats.find(entry => entry.key === 'eliminations_most_in_game')
    const final_blows_in_game = cs_best.stats.find(entry => entry.key === 'final_blows_most_in_game')
    const alldamage_in_game = cs_best.stats.find(entry => entry.key === 'all_damage_done_most_in_game')
    const solokills_in_game = cs_best.stats.find(entry => entry.key === 'solo_kills_most_in_game')
    const kill_streak_best = cs_best.stats.find(entry => entry.key === 'kill_streak_best')

    const overview_entries = [games_won, games_played, hero_wins, elims_in_game, solokills_in_game, kill_streak_best, alldamage_in_game, final_blows_in_game]

    function OverviewCard({my_dict}) {
        return (
            <Paper shadow='sm' p="lg" w="300px" >
                <Title order={5} >{my_dict.label}</Title>
                <Text size="lg">{my_dict.value}</Text>
            </Paper>
        )
    }

    return (
        <>
        <Box miw={700} p="xl" mx="auto"
        //  bg="var(--mantine-primary-color-6)"
         >
            <Title 
                order={2} style={{ paddingLeft: "12px", paddingBottom: "12px" }}>
                Overview
            </Title>
            <Group align='flex-start'>
                {overview_entries.map((item) => (
                    <OverviewCard my_dict={item}></OverviewCard>
                ))}
            </Group>
        </Box>
        {/* <pre>{JSON.stringify(cs_best, null, 2)}</pre> */}
        </>
  );
}

export default Overview;