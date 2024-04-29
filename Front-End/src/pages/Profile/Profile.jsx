import('./Profile.css')
import { SuggestedFriend } from '../../components/SuggestedFriend/SuggestedFriend'
import { getCurrentUser } from '../../services/user'
import { useState, useEffect } from 'react'
import ('../../components/SuggestedFriend/SuggestedFriend')

export const Profile = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const spotify_id = localStorage.getItem('spotify_id')
    async function getUserData() {
        async function fetchProfile(spotify_id) {
          const result = await getCurrentUser(spotify_id)
          const profile = await result
          console.log({result})
          return profile
        }
        const profile = await fetchProfile(spotify_id)
        setData(profile)
      }
      getUserData()
  }, [])


  return (
    <>
      <div className='profile-container'>
        <div className="card">
          <span className="pro">{data.country}</span>
          <img className="round" src={data.profile_picture_bg} alt="user" />
          <h3>{data.username}</h3>
          <h6>{data.country}</h6>
          <p>
            User interface designer and <br /> front-end developer
          </p>
          <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary">Follow</button>
          </div>
        </div>
        <div>
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

          <div className="suggestedFriendByArtist">
            <h6>Suggested Friend by music genre</h6>
            <ul>
              <li><SuggestedFriend/></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
