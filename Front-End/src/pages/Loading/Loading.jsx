import { loginSpotify } from "../../services/loginSpotify"
import { useEffect, useState, useContext } from "react"
import { UserContext } from "../../contexts/Contexts"
import { getUserSpotify } from '../../services/getUserSpotify' 
import { getUserTopArtist } from '../../services/getUserTopArtist'
import { createUser, addUserGenres, addTopTenArtist } from "../../services/user"
import profilePic from '../../assets/defaultProfilePicture.svg'
import  { Navigate } from 'react-router-dom'
import './Loading.css'
import { AuthContext } from '../../contexts/Contexts';

const Loading = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)
  const {currentUser, setCurrentUser} = useContext(UserContext)

  useEffect(() => {
    const login = async () => {
      if(!localStorage.getItem('access_token')) {
        const newToken = await loginSpotify()
        setToken(newToken)
        setIsLoggedIn(true)
      }
    }
    login()
  }, [isLoggedIn])

  const [token, setToken] = useState("")

  useEffect(() => {
    const getUserDataSpotify = async () => {
      setIsLoading(true)
        const userData = await getUserSpotify()
        localStorage.setItem('spotify_id', userData.id)
        sessionStorage.setItem('currentUser_id', userData.id)
        if (userData.images.length !== 0){
          createUser(userData.display_name,userData.country,userData.id,userData.images[0].url,userData.images[1].url)
        } else {
          createUser(userData.display_name,userData.country,userData.id,profilePic, profilePic)
        }
        setIsLoading(false)
        setCurrentUser({userData})
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
  }, [token, isLoggedIn]) 

  return (
    <div id="fetching-info">
      <h1>Fetching data</h1>
      <h1>Please wait ...</h1>
      {user && <Navigate to="/Home" replace={true} />}
    </div>
  )
}

export default Loading
