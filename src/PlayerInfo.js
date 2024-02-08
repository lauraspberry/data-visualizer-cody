import { Box, Image, Flex, Stack, Text, Title, Group } from '@mantine/core';

function PlayerInfo( {playerData } ) {
    return (
        <Stack>
            <Image src={playerData.summary.namecard} alt="namecard"  w="auto" />
            <Box 
                p="lg"
                // miw={700} p="lg" mx="auto"
            >
                <Flex
                    gap="md"
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Image src={playerData.summary.avatar} alt="avatar" radius="xl" h={100} w="auto" />
                    {/* <Avatar src={playerData.summary.avatar} alt="avatar" size="lg" radius="xl"></Avatar> */}
                    <Flex direction="column" justify="flex-end">
                        <Group gap="xs">
                            <Title order={1}>
                                {playerData.summary.username}
                            </Title>
                            <Image src={playerData.summary.endorsement.frame} alt="endorsement-frame" h={50} w="auto"/>
                        </Group>
                        <Text fw={'bold'} c="dimmed">
                            {playerData.summary.title.toUpperCase()}
                        </Text>
                    </Flex>
                </Flex>
                {/* <pre>{JSON.stringify(playerData.summary, null, 2)}</pre> */}
            </Box>
        </Stack>
);
}

export default PlayerInfo;