import React from 'react';
import Typography from '@mui/material/Typography';

const ActivityFeed = ({ activities }) => {
  return (
    <div>
      <Typography variant="h5">Activity Feed</Typography>
      {activities.map((activity, index) => (
        <div key={index}>
          <Typography variant="body1">{activity.user} {activity.action}</Typography>
          {/* Display more activity details */}
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
