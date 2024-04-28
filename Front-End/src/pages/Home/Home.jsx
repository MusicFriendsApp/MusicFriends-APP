import "./Home.css"
import { useEffect, useState } from "react"
import { getCurrentUser } from "../../services/user"
import UserCard from "../../components/UserCard/UserCard"
import { SuggestedFriend } from "../../components/SuggestedFriend/SuggestedFriend"
import Posts from "../../components/Posts/Posts"
import loadingImage from "../../assets/loading.gif"

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
    return <img id="loading-image" src={loadingImage}/>
  }

  return (
    <>
    <div id="homepage">
        <div id="content-left">
          <UserCard data={data}/>
        </div> 
        <div id="content-center">
          <Posts data={data}/>
        </div>
        <div id="content-right">
          <div className="content-rigth-item">
          <h6>Suggested Friend by music genre</h6>
            <ul>
              <li><SuggestedFriend/></li>
            </ul>
          </div>
        </div>
    </div>
    </>
  )
}        

export default Home
