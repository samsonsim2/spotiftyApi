import React from 'react'
import {
  ChakraProvider,
  Flex,
  Box,
  Spacer,
  HStack,
  Text,
  Heading,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react'
export const SearchBar = () => {
  return (
    <ChakraProvider>
      <Flex justifyContent='center' mt={50}>
        <Box w={'30vw'} p={'10'} borderRadius={10} boxShadow='md' bg={'white'}>
          <FormControl>
            <FormLabel fontSize={20}>
              Search for your favourite artist
            </FormLabel>
            <Flex gap={2}>
              <Input
                type='email'
                placeholder='Taylor Swift, Ed sheeran, Dua Lipa, etc...'
              />
              <Button bg={'#48BB78'}>Search</Button>
            </Flex>
          </FormControl>
        </Box>
      </Flex>
    </ChakraProvider>
  )
}
