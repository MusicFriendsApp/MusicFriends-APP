import './Posts.css'
import SinglePost from '../SinglePost/SinglePost'
import loadingImage from "../../assets/loading.gif"
import { getUserPosts } from "../../services/post"
import { useEffect, useState, useContext } from "react"
import { PostContext } from '../../contexts/Contexts'

const Posts = ({data}) => {

  const [isLoading, setIsLoading] = useState(false)
  const [userPosts, setUserPosts] = useState(null)
  const {send, setSend} = useContext(PostContext)

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
  }, [send])

  if(isLoading) {
    return <img id="loading-image" src={loadingImage}/>
  }

  return (
    <div id='posts-container'>
      {userPosts && userPosts.sort((a, b) => {return b.id - a.id}).map((post) => {
        return <SinglePost key={post.id} data={data} postData={post}/>
      })}
    </div>
  )
}

export default Posts
