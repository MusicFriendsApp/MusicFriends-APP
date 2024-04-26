import './UserCard.css'
import { useEffect, useState } from 'react'
import { getCurrentUser } from '../../services/user'

const UserCard = () => {

  const [data, setData] = useState('')
  
  useEffect(() => {
    async function getUserData() {
      const spotify_id = localStorage.getItem('spotify_id').toString()
        async function fetchProfile(spotify_id) {
          const result = await getCurrentUser(spotify_id)
          const profile = await result
          return profile
        }
        const profile = await fetchProfile(spotify_id)
        setData(profile)
      }
      getUserData()
  }, [])

  return (
    <div>
      <div className="card">
          <span className="pro">FREE</span>
          <img className="round" src={data.profile_picture_bg} alt="user" />
          <h3>{data.username}</h3>
          <h6>{data.country}</h6>
          <p>
            User interface designer and <br /> front-end developer
          </p>
          <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary">Follow</button>
          </div>
        </div>
    </div>
  )
}

export default UserCard
