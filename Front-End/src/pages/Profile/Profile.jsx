import './Profile.css'
import Posts from '../../components/Posts/Posts'
import UserCard from '../../components/UserCard/UserCard'
import { getCurrentUser } from '../../services/user'
import { useState, useEffect } from 'react'

export const Profile = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const spotify_id = localStorage.getItem('spotify_id')
    async function getUserData() {
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
    <>
      <div className='profile-container'>
        <UserCard data={data}/>
        <div>
          <div className="user-posts">
            <Posts/>
          </div>
        </div>
      </div>
    </>
  )
}
