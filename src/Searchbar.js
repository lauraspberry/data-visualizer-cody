import { Button, Container, Space, TextInput } from '@mantine/core';

function SearchBar( {username, setUsername, handleSearch } ) {
    return (
        <Container size="xs" >
            <TextInput 
                label="Enter Overwatch Battle Tag" 
                description="Input description" 
                onChange={(e) => setUsername(e.target.value)}
                width={80}
            />
            <Space h="md" />
            <Button onClick={handleSearch}>Search</Button>
            <Space h="md" />
        </Container>
    );
}

export default SearchBar;