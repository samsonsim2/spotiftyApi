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
  Switch,
} from '@chakra-ui/react'
export const Header = () => {
  return (
    <ChakraProvider>
      <Flex boxShadow='md' w={'100vw'} pr='200' pl='200' bg={'white'}>
        <Box p='5'>
          <Heading color={'dark grey'}>Spotify search</Heading>
        </Box>

        <Spacer />
        <HStack p='5' spacing={5}>
          <Button>
            <Text fontSize='xl' _hover={{ color: 'green' }}>
              Search
            </Text>
          </Button>
          <Button>
            <Text fontSize='xl' _hover={{ color: 'green' }}>
              About
            </Text>
          </Button>
          <Button>
            <Text fontSize='xl' _hover={{ color: 'green' }}>
              Login
            </Text>
          </Button>
          <Switch />
        </HStack>
      </Flex>
    </ChakraProvider>
  )
}
