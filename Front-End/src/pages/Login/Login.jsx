import './Login.css'
import { loginSpotify } from '../../services/loginSpotify'
import { useState, useEffect } from 'react'

import Button from '@mui/material/Button';

const Login = () => {

  const [options, setOptions] = useState('music')
  const [count, setCount] = useState(0)
  const optionsData = ['artists', 'genres', 'songs', 'common friends']

  function clearStorage() {
    let session = sessionStorage.getItem('register');
    if (session == null) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('expires_in');
      localStorage.removeItem('spotify_id');
      localStorage.removeItem('verifier');
    }
    sessionStorage.setItem('register', 1);
  }
  window.addEventListener('load', clearStorage);

  useEffect(() => {
    const generateInfo = () => {
        setCount(count + 1)
        if(count === 3) {
          setCount(0)
          setOptions(optionsData[count])
        }
        setOptions(optionsData[count])
    }
      setTimeout(() => {
      generateInfo()
    }, 3500)
  }, [count])

  return (
    <>
    <div id='loginpage'>
      <form id='login-form'>
        <h1>Find new friends with matching {options} with your Spotify</h1>
          <button id='login-button' onClick={loginSpotify}>Log In</button>
          <div id='checkbox-container'>
            <input id='terms' type='checkbox' required/>
            <p id='terms-p'>You accept to be redirected to the Spotify login</p>
          </div>
        <div id='primera'> 
          <div className='primera'>Connect with people that listen to the same artists or genres you listen</div>
          <div className='primera'> <img src="../src/assets/card.png" alt="" /> </div>
        </div>
        <div id='segunda'>
          <div className='segunda'>Login with your Spotify account
            <div id='auth'>AUTH Spotify</div>
          </div>
          <div className='segunda'>We suggest you other users with similar music taste
          <div> <img src="../src/assets/miniCard.png" alt="" /> </div>
          <div> <img src="../src/assets/miniCard.png" alt="" /> </div>
          </div>
        </div>
        <div id='tercera'>
          <div className='tercera'>Add them to your friends and share your thoughts, artists or playlists
            <div><img src="../src/assets/comment.png" alt="" /></div>
          </div>
          
          <div className='tercera'>Watch their posts, profile, favourite artists and genres
          
          <div><img src="../src/assets/watch.png" alt="" /></div></div>
        </div>
        <div id='cuarta'>
          <div>
            Become a bigger community and keep others updated with your favourite music
          </div>
          <div>
            <button id='login-button' onClick={loginSpotify}>Get started</button>
          </div>
          
          
          </div>
      </form>
    </div>
    </>
  )
}

export default Login
