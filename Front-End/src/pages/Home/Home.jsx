import "./Home.css"
import { useEffect, useState } from "react"
import { getCurrentUser } from "../../services/user"
import UserCard from "../../components/UserCard/UserCard"

const Home = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({})
  
  useEffect(() => {
    const getUserData = async () => {
      setIsLoading(true)
      try {
        const spotify_id = localStorage.getItem('spotify_id')
        const profile = await getCurrentUser(spotify_id)
        setData(profile)
      } catch (error) {
      } finally {
        setIsLoading(false)
      }
    }
    getUserData()
  }, [])

  if(isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
    <div id="homepage">
        <div id="content-left">
          <UserCard data={data}/>
        </div> 
        <div id="content-center">
        <div className="content-center-item">content-center-item</div>
        </div>
        <div id="content-right">
          <div className="content-rigth-item">content-rigth-item</div>
        </div>
      
    </div>
    </>
  )
}        

export default Home
