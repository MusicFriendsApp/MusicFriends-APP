import './UserCard.css'

const UserCard = ({data}) => {

  return (
    <div>
      <div className="myCard">
        <span className="pro">FREE</span>
        <img className="round" src={data.profile_picture_bg} alt="user" />
        <h3>{data.username}</h3>
        <h6>{data.country}</h6>
        <p>
          User interface designer and <br /> front-end developer
        </p>
        <div className="buttons">
          <button className="primary">My profile</button>
        </div>
      </div>
    </div>
  )
}

export default UserCard
