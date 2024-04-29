import './Posts.css'
import SinglePost from '../SinglePost/SinglePost'
import loadingImage from "../../assets/loading.gif"
import { getUserPosts } from "../../services/post"
import { useEffect, useState } from "react"

const Posts = ({data}) => {

  const [isLoading, setIsLoading] = useState(false)
  const [userPosts, setUserPosts] = useState(null)

  useEffect(() => {
    const getUserData = async () => {
      setIsLoading(true)
      try {
        const spotify_id = localStorage.getItem('spotify_id')
        const userFetchPosts = await getUserPosts(spotify_id)
        setUserPosts(userFetchPosts)
      } catch (error) {
      } finally {
        setIsLoading(false)
      }
    }
    getUserData()
  }, [])
  
  console.log(userPosts)

  if(isLoading) {
    return <img id="loading-image" src={loadingImage}/>
  }

  return (
    <div>
      {userPosts && userPosts.sort((a, b) => {return b.id - a.id}).map((post) => {
        return <SinglePost data={data} postData={post}/>
      })}
    </div>
  )
}

export default Posts
