import React from 'react';
import Typography from '@mui/material/Typography';

const FriendProfile = ({ friend }) => {
  return (
    <div>
      <Typography variant="h5">{friend.name}'s Profile</Typography>
      <Typography variant="body1">Bio: {friend.bio}</Typography>
      {/* Display more profile information */}
    </div>
  );
};

export default FriendProfile;
