import "./Home.css"
import { useEffect, useState, useContext } from "react"
import { getCurrentUser } from "../../services/user"
import UserCard from "../../components/UserCard/UserCard"
import { SuggestedFriend } from "../../components/SuggestedFriend/SuggestedFriend"
import Posts from "../../components/Posts/Posts"
import PostForm from "../../components/PostForm/PostForm"
import loadingImage from "../../assets/loading.gif"
import { UserContext } from "../../contexts/Contexts"

const Home = () => {

  const [isLoading, setIsLoading] = useState(false)
  const {currentUser, setCurrentUser} = useContext(UserContext)
  const [data, setData] = useState({})
  
  useEffect(() => {
    const getUserData = async () => {
      setIsLoading(true)
      try {
        const spotify_id = localStorage.getItem('spotify_id')
        const profile = await getCurrentUser(spotify_id)
        setData(profile)
        setCurrentUser(profile)
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
        <div className='stick-element' id="content-left">
          <UserCard data={data}/>
        </div> 
        <div id="content-center">
          <PostForm />
          <Posts data={data}/>
        </div>
        <div className='stick-element' id="content-right">
          <div className="content-rigth-item">
          <h6>People to discover</h6>
          <SuggestedFriend/>
          </div>
        </div>
    </div>
    </>
  )
}        

export default Home
