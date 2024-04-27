import { loginSpotify } from "../../services/loginSpotify"
import { useEffect, useState } from "react"
import { getUserSpotify } from '../../services/getUserSpotify' 
import { getUserTopArtist } from '../../services/getUserTopArtist'
import { createUser, addUserGenres, addTopTenArtist } from "../../services/user"
import profilePic from '../../assets/defaultProfilePicture.svg'
import  { Navigate } from 'react-router-dom'
import './Loading.css'

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const login = async () => {
      if(!localStorage.getItem('access_token')) {
        const newToken = await loginSpotify()
        setToken(newToken)
      }
    }
    login()
  }, [])

  const [token, setToken] = useState("")
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUserDataSpotify = async () => {
      setIsLoading(true)
        const userData = await getUserSpotify()
        localStorage.setItem('spotify_id', userData.id)
        if (userData.images.length !== 0){
          createUser(userData.display_name,userData.country,userData.id,userData.images[0].url,userData.images[1].url)
        } else {
          createUser(userData.display_name,userData.country,userData.id,profilePic,profilePic)
        }
        setIsLoading(false)
    }
    const getUserTopArtistData = async () => {
      setIsLoading(true)
        const {items} = await getUserTopArtist()
        const userSpotifyId = localStorage.getItem('spotify_id')
        const artistList = items.map(( artist )=>{
          return [artist.name, artist.id, artist.genres]
        })
        artistList.forEach((artist) => {
          addTopTenArtist(artist[0], artist[1], userSpotifyId)
        })
        artistList.forEach((genres) => {
          genres[2].forEach((genre) => {
            addUserGenres(genre, userSpotifyId)
          })
        })
        setIsLoading(false)
        setUser(true)
    }
    getUserDataSpotify()
    getUserTopArtistData()
  }, [token]) 

  return (
    <div>
      <h1>Data Loading...</h1>
      {user && <Navigate to="/home" replace={true} />}
    </div>
  )
}

export default Loading
