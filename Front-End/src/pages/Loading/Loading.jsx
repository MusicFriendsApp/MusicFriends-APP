import { loginSpotify } from "../../services/loginSpotify"
import { useEffect, useState, useContext } from "react"
import { UserContext, FriendListContext } from "../../contexts/Contexts"
import { getUserSpotify } from '../../services/getUserSpotify' 
import { getUserTopArtist } from '../../services/getUserTopArtist'
import { createUser, addUserGenres, addTopTenArtist, getAllUsers, checkFriend } from "../../services/user"
import profilePic from '../../assets/defaultProfilePicture.svg'
import  { Navigate } from 'react-router-dom'
import './Loading.css'

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)
  const {currentUser, setCurrentUser} = useContext(UserContext)
  const {friends, setFriends} = useContext(FriendListContext)

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
    const getUserFriends = async () => {
      setIsLoading(true)
        const users = await getAllUsers()
        console.log(users)
    }
    getUserDataSpotify()
    getUserTopArtistData()
    getUserFriends()
  }, [token]) 

  return (
    <div id="fetching-info">
      <h1>Fetching data</h1>
      <h1>Please wait ...</h1>
      {user && <Navigate to="/home" replace={true} />}
    </div>
  )
}

export default Loading
