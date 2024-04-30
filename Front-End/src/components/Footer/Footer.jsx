import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <>
      <div id="footer-container">
      
      <div id='column01'>
        <img id='logo' src="../src/assets/logo.png" alt="" />
        <h6>Spotify Friends</h6>
      </div>
      <div id='column02'>
        <h6>A Social Networking/Friendship App based on Spotify API</h6>
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

      <div id='column03'>
        <p>A Social Networking/Friendship App based on Spotify API</p>
      </div>
      
      
      
      </div>
    </>
  )
}

export default Footer
