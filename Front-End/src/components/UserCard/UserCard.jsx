import './UserCard.css'
import { useEffect, useState } from 'react'
import { getCurrentUser } from '../../services/user'

const UserCard = () => {

  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  
 /*  useEffect(() => {
    async function getUserData() {
      const spotify_id = await localStorage.getItem('spotify_id')
        async function fetchProfile(spotify_id) {
          const result = await getCurrentUser(spotify_id)
          const profile = await result
          return profile
        }
        const profile = await fetchProfile(spotify_id)
        setData(profile)
        setIsLoading(false)
        console.log(data)
        console.log(isLoading)
      }
      console.log(data)
      console.log(isLoading)
      getUserData()
  }, [])
  console.log(data)
  console.log(isLoading) */

  useEffect(() => {
    async function getUserData() {
      try {
        const spotify_id = localStorage.getItem('spotify_id')
        if (!spotify_id) {
          throw new Error('No se encontró el ID de Spotify en el almacenamiento local')
        }
        const profile = await getCurrentUser(spotify_id)
        setData({...profile})
        setIsDataLoaded(true) 
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error.message)
        setIsDataLoaded(true) 
      } 
    }

    getUserData()
  }, [])

  useEffect(() => {
    if (isDataLoaded) {
      setIsLoading(false)
    }
  }, [isDataLoaded])

  return (
    <div>
    {isLoading ? (
        <div>...</div>
      ) : (
      <div className="card">
          <span className="pro">FREE</span>
          <img className="round" src={data.profile_picture_bg} alt="user" />
          <h3>{data.username}</h3>
          <h6>{data.country}</h6>
          <p>
            User interface designer and <br /> front-end developer
          </p>
          <div className="buttons">
            <button className="primary">Follow</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserCard
