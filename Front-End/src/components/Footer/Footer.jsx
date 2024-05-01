import './Footer.css'
import logo from '../../assets/logo.png'

import AdbIcon from '@mui/icons-material/Diversity2';


const optionsData = ['artists', 'genres', 'songs', 'common friends']

const Footer = () => {
  return (
    <>
      <div id="footer-container">
      
      <div id='column01'>
        <h6 id='company-name'  className='text-footer'>Spotify Friends<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></h6>
        {/* <img id='logo' src={logo} alt="" /> */}
        
      </div>
      <div id='column02'>
        <h6 className='text-footer'>SPOTIFY FRIENDS is a Social Networking/Friendship App based on your preferences about music, musical genres and artist. 
          Enjoy your music, share with friends and keep up to date on the scene. Have you ever tried?</h6>
        <ul>
          <li className='text-footer'>User Authentication</li>
          <li className='text-footer'>Profile</li>
          <li className='text-footer'>Friend Networking</li>
          <li className='text-footer'>Chat</li>
          <li className='text-footer'>Friend Requests</li>
          <li className='text-footer'>Activity Feed</li>
          <li className='text-footer'>Music Recommendations</li>
          <li className='text-footer'>Events</li>
        </ul>
      </div>
{/* 
      <div id='column03'>
        <p>A Social Networking/Friendship App based on Spotify API</p>
      </div>
      
       */}
      
      </div>
    </>
  )
}

export default Footer
