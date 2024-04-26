import React from 'react';
import Typography from '@mui/material/Typography';

const MusicRecommendations = ({ recommendations }) => {
  return (
    <div>
      <Typography variant="h5">Music Recommendations</Typography>
      {recommendations.map((recommendation, index) => (
        <div key={index}>
          <Typography variant="body1">{recommendation.sender} recommends: {recommendation.song}</Typography>
          {/* Display more recommendation details */}
        </div>
      ))}
    </div>
  );
};

export default MusicRecommendations;
