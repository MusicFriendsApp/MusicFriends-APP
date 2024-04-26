import React from 'react';
import Typography from '@mui/material/Typography';

const Groups = ({ groups }) => {
  return (
    <div>
      <Typography variant="h5">Groups</Typography>
      {groups.map((group, index) => (
        <div key={index}>
          <Typography variant="body1">{group.name}</Typography>
          {/* Display more group details */}
        </div>
      ))}
    </div>
  );
};

export default Groups;

