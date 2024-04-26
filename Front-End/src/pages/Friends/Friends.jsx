/* import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

const Friends = () => {
  
  return (
    <div>
      <Typography variant="h3">Friends</Typography>
      <Typography variant="body1">
        This is the friends page content. Add your friends list here.
      </Typography>
    </div>
  );
};
export default Friends;
 */

import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import FriendsList from '../../components/Friends/FriendsList';

/* const Friends = () => {
  const friends = [
    { name: 'Friend 1', imageUrl: '/path/to/image1.jpg' },
    { name: 'Friend 2', imageUrl: '/path/to/image2.jpg' },
    // Add more friends as needed
  ]; */

  const Friends = () => {
    const [friends, setFriends] = useState([]);
  
    useEffect(() => {
      fetch('/api/friends') // Fetch friends data from API endpoint
        .then(response => response.json())
        .then(data => setFriends(data))
        .catch(error => console.error('Error fetching friends:', error));
    }, []);

  return (
    <div>
      <Typography variant="h3">Friends</Typography>
      <FriendsList friends={friends} />
    </div>
  );
};

export default Friends;
