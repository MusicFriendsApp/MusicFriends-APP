import React from 'react';
import FriendCard from './FriendCard';

const FriendsList = ({ friends }) => {
  return (
    <div>
      {friends.map((friend, index) => (
        <FriendCard key={index} name={friend.name} imageUrl={friend.imageUrl} />
      ))}
    </div>
  );
};

export default FriendsList;
