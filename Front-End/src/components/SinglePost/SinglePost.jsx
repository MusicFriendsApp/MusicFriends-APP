import './SinglePost.css'

const SinglePost = ({data}) => {
  return (
    <div id='single-post'>
      <div id='post-header'>
        <img src={data.profile_picture_sm} alt="" /><h4>Pablo Santana</h4>
      </div>
      <div id='post-body'>
        <p>Hi everyone this is my first post I love a lot of music genres so I really think I'll make a lot of friends here, let's share some music and discover together new artists.</p>
      </div>
      <div id='post-footer'>
        <img src="" alt="heart image" /><button>Like</button><button>Reply</button>
      </div>
    </div>
  )
}

export default SinglePost
