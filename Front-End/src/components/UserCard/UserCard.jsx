import { useEffect, useState } from 'react'
import './UserCard.css'
import { followUser, unfollowUser} from '../../services/user';

const UserCard = ({data, isFriendChecked}) => {
  const [userCard, setUserCard] = useState('card')
  const [isFollowing, setIsFollowing] = useState(false)
  const [classFollow, setClassFollow] = useState('')
  const [follow, setFollow] = useState('FOLLOW')
  const currentUserId = localStorage.getItem('spotify_id')
  
  const handleFollow = async () => {
    setIsFollowing(!isFollowing)
    if(isFollowing) {
      unfollowUser(currentUserId, data.spotify_id)
      setClassFollow('')
      setFollow('FOLLOW')
    } else {
      followUser(currentUserId, data.spotify_id)
      setClassFollow('following')
      setFollow('FOLLOWING')
    }
  }

  useEffect(() => {
    if (isFriendChecked) {
      setIsFollowing(!isFollowing)
      setClassFollow('following')
      setFollow('FOLLOWING')
    }
    if(data && data.spotify_id === currentUserId){
      setUserCard('card current-user-card')
    }
  }, [])

  const randomColor = () => {
    const randomColorArray = ['#b761bc', '#1db954', '#d7dbdc', '#86b3f6', '#e38417']
    const selectRandom = Math.floor(Math.random() * 5)
    return randomColorArray[selectRandom]
  }

  return (
    <div>
      <div className={userCard}>
        <span className="pro">FREE</span>
        <img className="round" src={data.profile_picture_bg} alt="user" style={{backgroundColor: randomColor()}}/>
        <h3>{data.username}</h3>
        <div className='user-stats-container'>
          <hr />
          <div>
            <h6>{Math.round(Math.random() * 532)}</h6>
            <h6>Posts</h6>
          </div>
          <hr />
          <div>
            <h6>{Math.round(Math.random() * 20)}</h6>
            <h6>Followers</h6>
          </div>
          <hr />
          <div>
            <h6>{Math.round(Math.random() * 50)}</h6>
            <h6>Following</h6>
          </div>
          <hr />
        </div>
        <div className="button-container">
          <button onClick={handleFollow} className={classFollow}><span>{follow}</span></button>
        </div>
      </div>
    </div>
  )
}

export default UserCard
