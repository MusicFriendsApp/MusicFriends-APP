import './SinglePost.css'
import likeImg from '../../assets/heart-like.svg'

const SinglePost = ({data, postData}) => {
  return (
    <div id='single-post'>
      <div id='post-header'>
        <img src={data.profile_picture_sm} alt="" /><h4>{data.username}</h4>
      </div>
      <div id='post-body'>
        <p>{postData.body}</p>
        <p></p>
      </div>
      <div id='post-footer'>
        <button id='like-button'><img id='like-button-img' src={likeImg} alt="heart image" /></button><button id='reply-button'>Reply</button>
      </div>
    </div>
  )
}

export default SinglePost
