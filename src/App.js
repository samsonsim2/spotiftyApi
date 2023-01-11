import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { Tracks } from './components/Tracks'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { Box, Text } from '@chakra-ui/react'
import { Artists } from './components/Artists'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Buffer } from 'buffer'
import { setArtists } from './features/searchBar/searchBarSlice'

function App() {
  var client_id = '337ae9fe47664622a78c2aa0f5b23c6b' // Your client id
  var client_secret = '5cf3877e34ee4203b9358f9ae9d752c8' // Your secret

  const fetchUrl = 'https://accounts.spotify.com/api/token'
  const dispatch = useDispatch()

  const { artistList, searchValue } = useSelector((state) => state.searchBar)
  useEffect(() => {
    console.log('rendering')
    // Api call for retrieving token

    const fetchToken = async () => {
      const { data } = await axios(fetchUrl, {
        method: 'POST',
        headers: {
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

      const {
        data: {
          artists: { items: artistList },
        },
      } = await axios(
        `https://api.spotify.com/v1/search?type=artist&q=${searchValue}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + data.access_token,
          },
        }
      )

      dispatch(setArtists(artistList))
    }
    fetchToken()
  }, [fetchUrl, searchValue])
  return (
    <>
      <Box w={'100vw'} h={'100vh'} bg={'#EDF2F7'} overflow='scroll'>
        <Header />
        <SearchBar />
        <Text align={'center'} fontSize={40} mt={20}>
          Artist
        </Text>
        <Artists />
      </Box>
    </>
  )
}

export default App
