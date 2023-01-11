import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Buffer } from 'buffer'

import {
  Card,
  Box,
  Image,
  Flex,
  Grid,
  Text,
  ChakraProvider,
  SimpleGrid,
  Button,
  Spacer,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'

export const Artist = ({ artist }) => {
  const { name, followers, genres, popularity, images } = artist
  return (
    <Box bg='white' p='10px' width={'400px'} borderRadius={10} boxShadow='md'>
      <Image
        src={
          images.length > 0 ? images[0].url : 'https://via.placeholder.com/640'
        }
        boxSize='400px'
      ></Image>
      <Text fontWeight={600} fontSize='25' display='inline'>
        {name}
      </Text>
      <Flex fontSize={'20px'}>
        <Text>Genre:</Text>
        <Spacer />
        <Text> {genres}</Text>
      </Flex>
      <Flex fontSize={'20px'}>
        <Text> Followers:</Text>
        <Spacer />
        <Text> {followers.total}</Text>
      </Flex>

      <Flex fontSize={'20px'}>
        <Text> Popularity:</Text>
        <Spacer />
        <Text> {popularity}</Text>
      </Flex>

      <Button mt='5' bg={'#48BB78'}>
        See More
      </Button>
    </Box>
  )
}
