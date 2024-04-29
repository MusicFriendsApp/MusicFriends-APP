import './SinglePost.css'
import likeImg from '../../assets/heart-like.svg'

const SinglePost = ({data}) => {
  return (
    <div id='single-post'>
      <div id='post-header'>
        <img src={data.profile_picture_sm} alt="" /><h4>{data.username}</h4>
      </div>
      <div id='post-body'>
        <p>Hi everyone this is my first post I love a lot of music genres so I really think I'll make a lot of friends here, let's share some music and discover together new artists.</p>
      </div>
      <div id='post-footer'>
        <button id='like-button'><img id='like-button-img' src={likeImg} alt="heart image" /></button><button id='reply-button'>Reply</button>
      </div>
    </div>
  )
}

export default SinglePost
