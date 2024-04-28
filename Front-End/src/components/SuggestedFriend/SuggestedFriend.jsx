import './SuggestedFriend.css'
import { useEffect, useState } from 'react'
import { getCurrentUser } from '../../services/user'
import { getUserGenres } from '../../services/genre'


export const SuggestedFriend = () => {

  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  useEffect(() => {
    async function getUserData() {
      try {
        const spotify_id = localStorage.getItem('spotify_id')
        if (!spotify_id) {
          throw new Error('Spotify ID not found')
        }
        const profile = await getCurrentUser(spotify_id)
        setData({...profile})
        setIsDataLoaded(true) 
      } catch (error) {
        console.error(error.message)
        setIsDataLoaded(true) 
      } 
    }

    getUserData()
  }, [])

  useEffect(() => {
    async function getAllGenres () {
      try {
        const spotify_id = localStorage.getItem('spotify_id')
        const {id} = await getCurrentUser(spotify_id)
        try {
          const userGenres = await getUserGenres(id)
          console.log(userGenres)
        } catch (error) {
          console.log(error)
        }
        console.log(userGenres)
      } catch (error) {
        console.log(error)
      }
    }

    

    getAllGenres()
  },[])


  return (
    <div>SuggestedFriend by music genres</div>
  )
}
