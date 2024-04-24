import ('./Profile.css')
import { getCurrentUser, createUser } from '../../services/user'
import getUserSpotify from '../../services/getUserSpotify'
import { useState, useEffect } from 'react'

export const Profile = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getUserDataSpotify = async () => {

      const userData = await getUserSpotify()
      setData(userData)
      createUser(userData.display_name,userData.country,userData.id,userData.images[0].url,userData.images[1].url)
    }
    getUserDataSpotify()
  }, [])

  return (
    <div>Profile {data.display_name}</div>
  )
}

