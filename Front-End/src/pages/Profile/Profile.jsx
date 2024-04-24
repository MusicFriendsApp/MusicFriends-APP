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


      if (userData.images.length !== 0){
        createUser(userData.display_name,userData.country,userData.id,userData.images[0].url,userData.images[1].url)
      } else {
        createUser(userData.display_name,userData.country,userData.id,'../../assets/defaultProfilePicture.svg','../../assets/defaultProfilePicture.svg')
      }
    }
    getUserDataSpotify()
  }, [])

  return (
    <div>Profile {data.display_name}</div>
  )
}

