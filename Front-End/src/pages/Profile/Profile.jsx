import('./Profile.css')
import { getCurrentUser } from '../../services/user'
import { useState, useEffect } from 'react'

export const Profile = () => {
  const [data, setData] = useState('')
  
  useEffect(() => {
    async function getUserData() {
      const spotify_id = localStorage.getItem('spotify_id').toString()
        async function fetchProfile(spotify_id) {
          const result = await getCurrentUser(spotify_id)
          const profile = await result
          return profile
        }
        const profile = await fetchProfile(spotify_id)
        setData(profile)
      }
      getUserData()
  }, [])


  return (
    <>
      <div className="card-container">
        <span className="pro">FREE</span>
        <img className="round" src={data.profile_picture_bg} alt="user" />
        <h3>{data.username}</h3>
        <h6>{data.country}</h6>
        <p>
          User interface designer and <br /> front-end developer
        </p>
        <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary ghost">Following</button>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </div>
      </div>
    </>
  )
}
