import { Box, Stack, Text, Title, Space } from '@mantine/core';

function LandingPage() {
    return (
        <Box 
                miw={700} p="lg" mx="auto"
                // bg={"blue"}
        >
            <Stack>
                <Space h="lg"></Space>
                <Title order={1}>
                    Welcome to LevelUpGuac!
                </Title>
                <Text>Enter an Overwatch Username in the Search Bar to get started. </Text>
            </Stack>
        </Box>
);
}

export default LandingPage;