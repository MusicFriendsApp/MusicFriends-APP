import { useContext, useEffect, useState } from 'react'
import './UserCard.css'
import { UserContext } from '../../contexts/Contexts'

const UserCard = ({data}) => {
  const {currentUser, setCurrentUser} = useContext(UserContext)
  const [userCard, setUserCard] = useState('card')
  useEffect(() => {
    if(data.spotify_id === currentUser.spotify_id){
      setUserCard('card current-user-card')
    }
  }, [])

  return (
    <div>
      <div className={userCard}>
        <span className="pro">FREE</span>
        <img className="round" src={data.profile_picture_bg} alt="user" />
        <h3>{data.username}</h3>
        <h6>{data.country}</h6>
        <div className='user-stats-container'>
          <hr />
          <div>
            <h6>10</h6>
            <h6>Posts</h6>
          </div>
          <hr />
          <div>
            <h6>5</h6>
            <h6>Followers</h6>
          </div>
          <hr />
          <div>
            <h6>5</h6>
            <h6>Following</h6>
          </div>
          <hr />
        </div>
        <div className='user-stats-container'>
        </div>
        <p>
          User interface designer and <br /> front-end developer
        </p>
        <div className="buttons">
          <button className="primary">Follow</button>
        </div>
      </div>
    </div>
  )
}

export default UserCard
