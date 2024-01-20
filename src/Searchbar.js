import { Button, Flex, TextInput } from '@mantine/core';

function SearchBar( { setUsername, handleSearch } ) {
    return (
        <Flex gap="sm" style={{ margin: 10 }}>
            <TextInput 
                placeholder="Enter Overwatch Battle Tag" 
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: 300 }}
            />
            <Button onClick={handleSearch}>Search</Button>
        </Flex>
    );
}

export default SearchBar;