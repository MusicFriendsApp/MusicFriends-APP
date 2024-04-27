import './SuggestedFriend.css'
import { useEffect, useState } from 'react'
import { getCurrentUser } from '../../services/user'


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
        console.log(spotify_id)
      } catch (error) {
        console.error(error.message)
        setIsDataLoaded(true) 
      } 
    }

    getUserData()
  }, [])

  return (
    <div>SuggestedFriend by music genres</div>
  )
}
