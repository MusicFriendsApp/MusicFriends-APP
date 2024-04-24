import ('./Profile.css')
import { getCurrentUser } from '../../services/user'



export const Profile = () => {

    const token = localStorage.getItem('token')

    const profile = fetchProfile(token)

    const id = profile.id
    console.log(id)

    async function fetchProfile(token) {
        const result = await fetch("https://api.spotify.com/v1/me", {
          method: "GET", headers: { Authorization: `Bearer ${token}` }
        });
        

        
        
        return await result.json();
      } 


  return (
    <div>Profile </div>
  )
}

