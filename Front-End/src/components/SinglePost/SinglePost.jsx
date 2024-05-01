import './SinglePost.css'
import likeImg from '../../assets/heart-like.svg'

const SinglePost = ({data, postData}) => {
  const randomColor = () => {
    const randomColorArray = ['#b761bc', '#1db954', '#d7dbdc', '#86b3f6', '#e38417']
    const selectRandom = Math.floor(Math.random() * 5)
    return randomColorArray[selectRandom]
  }
  return (
    <div id='single-post'>
      <div id='post-header'>
        <img src={data.profile_picture_sm} alt="" style={{backgroundColor: randomColor()}}/><h4>{data.username}</h4>
      </div>
      <div id='post-body'>
        <p>{postData.body}</p>
        <p></p>
      </div>
      <div id='post-footer'>
        <button id='like-button'><img id='like-button-img' src={likeImg} alt="heart image" /></button><button id='reply-button'>REPLY</button>
      </div>
    </div>
  )
}

export default SinglePost
