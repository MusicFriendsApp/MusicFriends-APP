import './SuggestedFriendCard.css'

const SuggestedFriendCard = ({data}) => {
  return (
    <div id='suggested-friend-card'>
      <div id='suggested-friend-header'>
        <img id='suggested-friend-avatar' src={data.profile_picture_sm}/>
        <h4 id='suggested-friend-name'>{data.username}</h4>
      </div>
      <button>Follow</button>
    </div>
  );
};

export default SuggestedFriendCard