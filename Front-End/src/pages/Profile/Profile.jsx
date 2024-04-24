import ('./Profile.css')
import { getCurrentUser } from '../../services/user'
import getUserSpotify from '../../services/getUserSpotify'
import { useState, useEffect } from 'react'

export const Profile = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getUserDataSpotify = async () => {

      const userData = await getUserSpotify()
      setData(userData)
    }
    getUserDataSpotify()
  }, [])

  return (
    <div>Profile {data.display_name}</div>
  )
}

