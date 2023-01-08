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

export const Artist = () => {
  const [token, setToken] = useState('')
  const [artists, setArtists] = useState([])
  // var request = require('request') // "Request" library
  const id = '06HL4z0CvFAxyc27GXpf02'
  const market = 'US'

  var client_id = '337ae9fe47664622a78c2aa0f5b23c6b' // Your client id
  var client_secret = '5cf3877e34ee4203b9358f9ae9d752c8' // Your secret

  const fetchUrl = 'https://accounts.spotify.com/api/token'
  useEffect(() => {
    // Api call for retrieving token

    const fetchToken = async () => {
      const { data } = await axios(fetchUrl, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            new Buffer(
              process.env.REACT_APP_CLIENT_ID +
                ':' +
                process.env.REACT_APP_CLIENT_SECRET
            ).toString('base64'),
        },
        data: 'grant_type=client_credentials',
      })

      setToken(data.access_token)

      const {
        data: {
          artists: { items: artistList },
        },
      } = await axios('https://api.spotify.com/v1/search?type=artist&q=A', {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      setArtists(artistList)
    }
    fetchToken()
  }, [fetchUrl])

  if (artists) {
    return (
      <>
        <ChakraProvider>
          <Flex mt='20' justifyContent='center'>
            <SimpleGrid w={'90vw'} minChildWidth='400px' spacing='40px'>
              {artists.map((artist, index) => {
                const { name, followers, genres, popularity, images } = artist

                if (images.length === 0) {
                  return images.push({
                    url: 'https://via.placeholder.com/640',
                  })
                }
                const artistImage = images[0].url

                return (
                  <Box
                    key={index}
                    bg='white'
                    p='10px'
                    width={'400px'}
                    borderRadius={10}
                    boxShadow='md'
                  >
                    <Image src={artistImage} boxSize='400px'></Image>
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
              })}
            </SimpleGrid>
          </Flex>
        </ChakraProvider>
      </>
    )
  }
}
