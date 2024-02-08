import { Box } from '@mantine/core';

function ErrorMessage({error}) {
    return (
        <Box 
                miw={700} p="lg" mx="auto"
                // bg={"blue"}
        >
            {/* <Stack>
                <Space h="lg"></Space>
                <Title order={1}>
                    Welcome to LevelUpGuac!
                </Title>
                <Text>Enter an Overwatch Username in the Search Bar to get started. </Text>
            </Stack> */}
            <p style={{ color: 'red' }}>{error}</p>
        </Box>
);
}

export default ErrorMessage;