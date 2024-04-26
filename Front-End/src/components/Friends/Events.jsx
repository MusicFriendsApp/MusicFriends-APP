import React from 'react';
import Typography from '@mui/material/Typography';

const Events = ({ events }) => {
  return (
    <div>
      <Typography variant="h5">Upcoming Events</Typography>
      {events.map((event, index) => (
        <div key={index}>
          <Typography variant="body1">{event.name} - {event.date}</Typography>
          {/* Display more event details */}
        </div>
      ))}
    </div>
  );
};

export default Events;
