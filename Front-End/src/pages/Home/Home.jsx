import "./Home.css"
import { useEffect, useState, useContext } from "react"
import { getCurrentUser } from "../../services/user"
import UserCard from "../../components/UserCard/UserCard"
import { SuggestedFriend } from "../../components/SuggestedFriend/SuggestedFriend"
import loadingImage from "../../assets/loading.gif"
import Posts from "../../components/Posts/Posts"
import PostForm from "../../components/PostForm/PostForm"
import { UserContext} from "../../contexts/Contexts"

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
        setCurrentUser(profile)
        setData(profile)
      } catch (error) {
      } finally {
        setIsLoading(false)
      }
    }
    getUserData()
  }, [])

  return (
    <>
    <div id="homepage">
        <div className='stick-element' id="content-left">
          {data && Object.keys(data).length > 0 ? (
            <UserCard data={data}/>
          ) : (
            <img id="loading-image" src={loadingImage} alt="loading image" />
          )}
        </div> 
        <div id="content-center">
          <PostForm />
          <Posts />
        </div>
        <div className='stick-element' id="content-right">
          <div className="content-rigth-item">
            <SuggestedFriend/>
          </div>
        </div>
    </div>
    </>
  )
}        

export default Home
