import { loginSpotify } from "../../services/loginSpotify"
import "./Home.css"
import { useEffect, useState } from "react"
import { createUser } from '../../services/user'
import { getUserSpotify } from '../../services/getUserSpotify' 
import { getUserTopArtist } from '../../services/getUserTopArtist'
import { addTopTenArtist } from '../../services/user'
import { addUserGenres } from "../../services/genre"
import profilePic from '../../assets/defaultProfilePicture.svg'

const Home = () => {
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

      const userData = await getUserSpotify()
      localStorage.setItem('spotify_id', userData.id)

      if (userData.images.length !== 0){
        createUser(userData.display_name,userData.country,userData.id,userData.images[0].url,userData.images[1].url)
      } else {
        createUser(userData.display_name,userData.country,userData.id,profilePic,profilePic)
      }
    }
    getUserDataSpotify()

    const getUserTopArtistData = async () => {
      const {items} = await getUserTopArtist()
      const userSpotifyId = localStorage.getItem('spotify_id')
      const artistList = items.map(( artist )=>{
        return [artist.name, artist.id, artist.genres]
      })
      artistList.forEach((artist) => {
        addTopTenArtist(artist[0], artist[1], userSpotifyId)
                    //artist_name, spotify_id, userSpotifyId
      })
      artistList.forEach((artist) => {
        addUserGenres(artist.genres)
      })      
      

      console.log(artistList)
    }
    getUserTopArtistData()

  }, [token]) 



  return (
    <>
    <div id="homepage">
        <br/>
        <div id="content-left">Content left
          <div className="content-left-item">content-left-item</div>
        </div>
        
        <div id="content-right">Content right
          <div className="content-rigth-item">content-rigth-item</div>
        </div>
      
    </div>
    </>
  )
}

export default Home
