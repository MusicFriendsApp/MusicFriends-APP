import { useEffect, useState } from 'react';
import './Footer.css'
import AdbIcon from '@mui/icons-material/Diversity2';

const Footer = () => {
  const [date, setDate] = useState('')

  useEffect(() => {
    const getYear = () => {
      const date = new Date()
      const year = date.getFullYear()
      setDate(year)
    }
    getYear()
  }, [])

  return (
    <>
      <div id="footer-container">
      
        <div id='column01'>
          <h6 id='company-name'  className='text-footer'>MUSIC FRIENDS</h6>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        </div>
        <div id='column02'>
          <h5 className='text-footer'>MUSIC FRIENDS is a Social Networking/Friendship App based on your preferences about music, musical genres and artist. <br />
            Enjoy your music, share with friends and keep up to date on the scene. Have you ever tried?</h5>
            <p className='text-footer'>&#169; Copyright MUSIC FRIENDS developers {date}</p>
          <div id='footer-list-container'>
            <ul>
              <li className='text-footer'><h6>User Authentication</h6></li>
              <li className='text-footer'><h6>Profile</h6></li>
              <li className='text-footer'><h6>Friend Networking</h6></li>
              <li className='text-footer'><h6>Chat</h6></li>
            </ul>
            <ul>
              <li className='text-footer'><h6>Friend Requests</h6></li>
              <li className='text-footer'><h6>Activity Feed</h6></li>
              <li className='text-footer'><h6>Music Recommendations</h6></li>
              <li className='text-footer'><h6>Events</h6></li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer
