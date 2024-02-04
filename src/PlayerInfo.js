import { Avatar, Image, Flex, Stack, Title } from '@mantine/core';

function PlayerInfo( {playerData } ) {
    return (
        <Stack>
            <Image src={playerData.summary.namecard} alt="namecard"  w="auto" />
            <Flex
                gap="md"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="wrap"
            >
                {/* <Image src={playerData.summary.avatar} alt="avatar" radius="xl" h={100} w="auto" /> */}
                <Avatar src={playerData.summary.avatar} alt="avatar" size="lg" radius="xl"></Avatar>
                <Title order={1}>
                    {playerData.summary.username}
                </Title>
                <Image src={playerData.summary.endorsement.frame} alt="endorsement-frame" h={70} w="auto"/>
            </Flex>
        </Stack>
);
}

export default PlayerInfo;