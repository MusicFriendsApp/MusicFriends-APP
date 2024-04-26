import React from 'react';
import Typography from '@mui/material/Typography';

const FriendRequests = ({ friendRequests }) => {
  return (
    <div>
      <Typography variant="h5">Friend Requests</Typography>
      {friendRequests.map((request, index) => (
        <div key={index}>
          <Typography variant="body1">{request.senderName} sent you a friend request</Typography>
          {/* Add accept and reject buttons */}
        </div>
      ))}
    </div>
  );
};

export default FriendRequests;
