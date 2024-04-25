import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const About = () => {
  return (
    <div>
      <Typography variant="h3">About Us</Typography>
      <Typography variant="body1">
        Welcome to our social network/dating app based on the Spotify API! We are passionate about creating a platform where music lovers can connect and find meaningful relationships through their shared love of music.
      </Typography>
      <Typography variant="body1">
        Our team, lead by Pablo with the help of Freddy and Daniel, is dedicated to providing a seamless user experience, intuitive interface, and robust features to enhance your social networking and dating experience.
      </Typography>
      <Typography variant="body1">
        To learn more about our project and contribute to our codebase, visit our GitHub repository:
        {' '}
        <Link href="https://github.com/SpotifyFriends/SpotifyFriends-APP" target="_blank" rel="noopener noreferrer">
          Our GitHub Repository
        </Link>
      </Typography>
    </div>
  );
};

export default About;

