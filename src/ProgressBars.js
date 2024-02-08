import { Progress, Text, Title } from '@mantine/core';

function ProgressBars( {playerData } ) {

    const career_stats = playerData.stats.console.quickplay.career_stats;

    const all_characters = ["ana", "ashe", "baptiste", "bastion", "brigitte", "cassidy", "dva", "echo", "genji", "hanzo", "illari", "junker-queen", "junkrat", "kiriko", "lifeweaver", "lucio", "mauga", "mei", "mercy", "moira", "orisa", "pharah", "ramattra", "reaper", "reinhardt", "roadhog", "sigma", "sojourn", "soldier-76", "sombra", "symmetra", "torbjorn", "tracer", "venture", "widowmaker", "winston", "wrecking-ball", "zarya", "zenyatta"] 

    const career_stats_to_hero_stats = all_characters.map(character => ({
        name: character,
        dict: career_stats[character]?.filter(item => item.category === "game")[0].stats,
    }));

    function OverviewCard({my_dict}) {
        return (
            <>
                {/* <Grid> */}
                    <Title order={4}>{my_dict.label}: </Title>
                    <Text size="lg">{my_dict.value}</Text>
                    <div class="progress-bar-container">
                        <Progress value={my_dict.value/ 33895 * 100} />
                    </div>
                {/* </Grid> */}
            </>
        )
    }

    return (
        <>
            {career_stats_to_hero_stats.map((item) => (
                <>
                <Title order={3}>{item?.name}: </Title>
                {item.dict?.filter(item2 => item2.key === "time_played").map(item2 => {
                    return <OverviewCard my_dict={item2}></OverviewCard>
                })}
                </>
            ))}
            {/* <OverviewCard my_dict={item}></OverviewCard> */}
            {/* <pre>{JSON.stringify(career_stats_to_hero_stats, null, 2)}</pre> */}
        </>
  );
}

export default ProgressBars;