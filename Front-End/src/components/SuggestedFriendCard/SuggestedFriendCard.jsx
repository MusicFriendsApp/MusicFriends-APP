import './SuggestedFriendCard.css'
import { followUser, unfollowUser } from '../../services/user';
import { useEffect, useState } from 'react';

const SuggestedFriendCard = ({data, randomColor}) => {

  const currentUserId = localStorage.getItem('spotify_id')
  const [isFollowing, setIsFollowing] = useState(false)
  const [follow, setFollow] = useState('Follow')
  
  const handleFollow = async () => {
    setIsFollowing(!isFollowing)
    if(isFollowing) {
      unfollowUser(currentUserId, data.spotify_id)
      setFollow('Follow')
    } else {
      followUser(currentUserId, data.spotify_id)
      setFollow('Following')
    }
  }

  return (
    <div id='suggested-friend-card'>
      <div id='suggested-friend-header'>
        <img id='suggested-friend-avatar' src={data.profile_picture_sm} style={{backgroundColor: randomColor}}/>
        <h4 id='suggested-friend-name'>{data.username}</h4>
      </div>
      <button onClick={handleFollow}>{follow}</button>
    </div>
  );
};

export default SuggestedFriendCard