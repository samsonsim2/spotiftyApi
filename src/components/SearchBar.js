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
  StatHelpText,
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'

import {
  alert,
  clearAlert,
  handleChange,
  handleSubmit,
} from '../features/searchBar/searchBarSlice'
import Alert from './Alert'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const { searchValue, showAlert, alertMessage, isLoading, artistList } =
    useSelector((state) => state.searchBar)

  console.log(searchValue)
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
                value={searchValue}
                onChange={(e) => {
                  dispatch(handleChange(e))
                }}
              />
            </Flex>
            {showAlert && <Alert />}
          </FormControl>
        </Box>
      </Flex>
    </ChakraProvider>
  )
}
