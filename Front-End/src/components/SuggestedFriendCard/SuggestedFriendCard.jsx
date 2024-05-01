import './SuggestedFriendCard.css'
import { followUser, unfollowUser } from '../../services/user';
import { useEffect, useState } from 'react';

const SuggestedFriendCard = ({data, randomColor}) => {

  const currentUserId = localStorage.getItem('spotify_id')
  const [isFollowing, setIsFollowing] = useState(false)
  const [classFollow, setClassFollow] = useState('')
  
  const handleFollow = async () => {
    setIsFollowing(!isFollowing)
    if(isFollowing) {
      unfollowUser(currentUserId, data.spotify_id)
      setClassFollow('')
    } else {
      followUser(currentUserId, data.spotify_id)
      setClassFollow('following')
    }
  }

  return (
    <div id='suggested-friend-card'>
      <div id='suggested-friend-header'>
        <img id='suggested-friend-avatar' src={data.profile_picture_sm} style={{backgroundColor: randomColor}}/>
        <h4 id='suggested-friend-name'>{data.username}</h4>
      </div>
      <button onClick={handleFollow} className={classFollow}><span>FOLLOW</span></button>
    </div>
  );
};

export default SuggestedFriendCard