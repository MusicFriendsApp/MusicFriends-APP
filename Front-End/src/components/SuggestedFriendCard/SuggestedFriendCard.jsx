import './SuggestedFriendCard.css'

const SuggestedFriendCard = ({data}) => {
  console.log(data)
  return (
    <div>
      <img id='suggested-friend-avatar' src={data.profile_picture_sm}/>
      <h1>{data.username}</h1>
    </div>
  );
};

export default SuggestedFriendCard