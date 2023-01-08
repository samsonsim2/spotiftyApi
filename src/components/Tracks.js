import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Buffer } from 'buffer'

export const Tracks = () => {
  const [token, setToken] = useState('')
  const [tracks, setTracks] = useState([])
  // var request = require('request') // "Request" library
  const id = '06HL4z0CvFAxyc27GXpf02'
  const market = 'US'

  var client_id = '337ae9fe47664622a78c2aa0f5b23c6b' // Your client id
  var client_secret = '5cf3877e34ee4203b9358f9ae9d752c8' // Your secret
  const sendRequest = () => {
    console.log('hi')
  }

  const fetchUrl = 'https://accounts.spotify.com/api/token'
  useEffect(() => {
    // Api call for retrieving token

    const fetchToken = async () => {
      const { data } = await axios(fetchUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            new Buffer(client_id + ':' + client_secret).toString('base64'),
        },
        data: 'grant_type=client_credentials',
      })

      setToken(data.access_token)

      const test = await axios(
        `https://api.spotify.com/v1/artists/${id}/albums`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      )
      console.log(test)
    }
    fetchToken()
  }, [fetchUrl])
}
