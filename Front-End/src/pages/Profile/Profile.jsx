import './Profile.css'
import UserCard from '../../components/UserCard/UserCard'
import loadingImage from "../../assets/loading.gif"
import { getCurrentUser } from '../../services/user'
import { useState, useEffect } from 'react'
import Artists from '../../components/Artists/Artists'

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
        <div id="user-info">
          {data && Object.keys(data).length > 0 ? (
                <UserCard data={data}/>
              ) : (
                <img id="loading-image" src={loadingImage} alt="loading image" />
              )}
        </div>
        <div id='artists-list-container'>
          <h3>YOUR MOST LISTENED ARTISTS</h3>
          <Artists />
        </div>
      </div>
    </>
  )
}
