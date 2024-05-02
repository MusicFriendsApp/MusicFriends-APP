import './Posts.css'
import SinglePost from '../SinglePost/SinglePost'
import loadingImage from "../../assets/loading.gif"
import { getUserPosts } from "../../services/post"
import { getAllUsers, checkFriend, getOneUser} from '../../services/user'
import { useEffect, useState, useContext} from "react"
import { PostContext, UserContext } from '../../contexts/Contexts'

const Posts = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState([]);
  const {send, setSend} = useContext(PostContext)
  const {currentUser, setCurrentUser} = useContext(UserContext)
  const [sessionUser, setSessionUser] = useState('');
  
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const user = sessionStorage.getItem('currentUser_id')
        setSessionUser(user)
        if(currentUser && currentUser.id) { 
          const allUsers = await getAllUsers();
          const userPostsPromises = allUsers.map(async (user) => {
            if (user.id === currentUser.id || (await checkFriend(currentUser.id, user.id))) {
              const userData = await getOneUser(user.id);
              const userPosts = await getUserPosts(user.spotify_id);
              return userPosts.map(post => ({ user: userData, post }));
            }
            return [];
          });
          const resolvedUserPosts = await Promise.all(userPostsPromises);
          const allPosts = resolvedUserPosts.flat();
          const sortedPosts = allPosts.sort((a, b) => b.post.id - a.post.id);
          setPosts(sortedPosts);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [send, sessionUser, currentUser])

  if(isLoading) {
    return <img id="loading-image" src={loadingImage}/>
  }

  return (
    <div id="posts-container">
      {posts.map(({ user, post }) => (
        <SinglePost key={post.id} postData={post} user={user} />
      ))}
    </div>
  )
}

export default Posts
