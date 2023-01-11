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
import { Artist } from './Artist'

export const Artists = () => {
  const { artistsList, searchValue } = useSelector((state) => state.searchBar)

  if (artistsList && searchValue) {
    return (
      <>
        <ChakraProvider>
          <Flex mt='20' justifyContent='center'>
            <SimpleGrid w={'90vw'} minChildWidth='400px' spacing='40px'>
              {artistsList.map((artist, index) => {
                return <Artist key={index} artist={artist}></Artist>
              })}
            </SimpleGrid>
          </Flex>
        </ChakraProvider>
      </>
    )
  }

  return
}
