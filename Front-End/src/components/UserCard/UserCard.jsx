import { useContext, useEffect, useState } from 'react'
import './UserCard.css'
import { UserContext } from '../../contexts/Contexts'

const UserCard = ({data}) => {
  const {currentUser, setCurrentUser} = useContext(UserContext)
  const [userCard, setUserCard] = useState('card')
  useEffect(() => {
    if(data && data.spotify_id === currentUser.spotify_id){
      setUserCard('card current-user-card')
    }
  }, [])
  const randomColor = () => {
    const randomColorArray = ['#b761bc', '#1db954', '#d7dbdc', '#86b3f6', '#e38417']
    const selectRandom = Math.floor(Math.random() * 5)
    return randomColorArray[selectRandom]
  }

  return (
    <div>
      <div className="card">
        <span className="pro">FREE</span>
        <img className="round" src={data.profile_picture_bg} alt="user" style={{backgroundColor: randomColor()}}/>
        <h3>{data.username}</h3>
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
        <div className="button-myprofile">
          <button className="primary">My profile</button>
        </div>
      </div>
    </div>
  )
}

export default UserCard
