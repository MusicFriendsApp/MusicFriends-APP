import './Footer.css'
import logo from '../../assets/logo.png'


const optionsData = ['artists', 'genres', 'songs', 'common friends']

const Footer = () => {
  return (
    <>
      <div id="footer-container">
      
      <div id='column01'>
        <img id='logo' src={logo} alt="" />
        <h6 id='company-name'>Spotify Friends</h6>
      </div>
      <div id='column02'>
        <h6>A Social Networking/Friendship App based on your preferences about music, musical genres and artist. 
          Enjoy your music, share with friends and keep up to date on the scene. Have you ever tried?</h6>
        <ul>
          <li>User Authentication</li>
          <li>Profile</li>
          <li>Friend Networking</li>
          <li>Chat</li>
          <li>Friend Requests</li>
          <li>Activity Feed</li>
          <li>Music Recommendations</li>
          <li>Events</li>
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
