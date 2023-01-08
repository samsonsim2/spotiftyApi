import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { Tracks } from './components/Tracks'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { Box } from '@chakra-ui/react'
import { Artists } from './components/Artists'

function App() {
  return (
    <>
      <Box w={'100vw'} h={'100vh'} bg={'#EDF2F7'} overflow='scroll'>
        <Header />
        <SearchBar />
        <Artists />
      </Box>
    </>
  )
}

export default App
