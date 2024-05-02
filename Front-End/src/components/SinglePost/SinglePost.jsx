import './SinglePost.css'
import likeImg from '../../assets/heart.svg'
import likedImg from '../../assets/heart-filled.svg'
import { useState } from 'react'

const SinglePost = ({postData, user}) => {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState(false)
  const [classLiked, setClassLiked] = useState(false)
  const [likeIcon, setLikeIcon] = useState(likeImg)

  const randomColor = () => {
    const randomColorArray = ['#b761bc', '#1db954', '#d7dbdc', '#86b3f6', '#e38417']
    const selectRandom = Math.floor(Math.random() * 5)
    return randomColorArray[selectRandom]
  }

  const handleLike = async () => {
    setLike(!like)
    if(like) {
      // unLikePost(currentUserId, postData.id)
      setClassLiked('')
      setLike(false)
      setLikeIcon(likeImg)
    } else {
      // LikePost(currentUserId, postData.id)
      setClassLiked('liked')
      setLike(true)
      setLikeIcon(likedImg)
    }
  }

  return (
    <div id='single-post'>
      <div id='post-header'>
        <img src={user.profile_picture_sm} alt="" style={{backgroundColor: randomColor()}}/><h4>{user.username}</h4>
      </div>
      <div id='post-body'>
        <p>{postData.body}</p>
      </div>
      <div id='post-footer'>
        <button id='like-button' onClick={handleLike}><img id='like-button-img' src={likeIcon} alt="heart image" /></button><p id='like-counts'>{count} likes</p>
      </div>
    </div>
  )
}

export default SinglePost
