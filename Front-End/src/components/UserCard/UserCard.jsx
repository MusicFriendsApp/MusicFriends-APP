import './UserCard.css'
import { useEffect, useState } from 'react'
import { getCurrentUser } from '../../services/user'

const UserCard = () => {

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
