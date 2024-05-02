import './SuggestedFriendCard.css'
import { followUser, unfollowUser } from '../../services/user';
import { useState } from 'react';
import profilePic from '../../assets/defaultProfilePicture.svg'

const SuggestedFriendCard = ({data, randomColor}) => {

  const currentUserId = localStorage.getItem('spotify_id')
  const [isFollowing, setIsFollowing] = useState(false)
  const [classFollow, setClassFollow] = useState('')
  const [follow, setFollow] = useState('FOLLOW')
  
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

  return (
    <div id='suggested-friend-card'>
      <div id='suggested-friend-header'>
        <img id='suggested-friend-avatar' src={data.profile_picture_sm !== '' ? data.profile_picture_sm : profilePic} style={{backgroundColor: randomColor}}/>
        <h4 id='suggested-friend-name'>{data.username}</h4>
      </div>
      <button onClick={handleFollow} className={classFollow}><span>{follow}</span></button>
    </div>
  );
};

export default SuggestedFriendCard