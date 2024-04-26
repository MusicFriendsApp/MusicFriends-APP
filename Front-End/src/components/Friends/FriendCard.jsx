import React from 'react';
import Typography from '@mui/material/Typography';

const FriendCard = ({ name, imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <Typography variant="body1">{name}</Typography>
    </div>
  );
};

export default FriendCard;
