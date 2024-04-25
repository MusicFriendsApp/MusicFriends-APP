import ('./Profile.css')
import { getCurrentUser, createUser } from '../../services/user'
import getUserSpotify from '../../services/getUserSpotify'
import { useState, useEffect } from 'react'


export const Profile = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getUserDataSpotify = async () => {

      const userData = await getUserSpotify()
      setData(userData)


      if (userData.images.length !== 0){
        createUser(userData.display_name,userData.country,userData.id,userData.images[0].url,userData.images[1].url)
      } else {
        createUser(userData.display_name,userData.country,userData.id,'../../assets/defaultProfilePicture.svg','../../assets/defaultProfilePicture.svg')
      }
    }
    getUserDataSpotify()
  }, [])

  return (
    <>
    <div>Profile {data.display_name}</div>
    <div class="card-container">
	<span class="pro">PRO</span>
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>Ricky Park</h3>
	<h6>New York</h6>
	<p>User interface designer and <br/> front-end developer</p>
	<div class="buttons">
		<button class="primary">
			Message
		</button>
		<button class="primary ghost">
			Following
		</button>
	</div>
	<div class="skills">
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

<footer>
{/* 	<p>
		Created with <i class="fa fa-heart"></i> by
		<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
		- Read how I created this
		<a target="_blank" href="https://florin-pop.com/blog/2019/04/profile-card-design">here</a>
		- Design made by
		<a target="_blank" href="https://dribbble.com/shots/6276930-Profile-Card-UI-Design">Ildiesign</a>
	</p> */}
</footer>
    </>
  )
}

