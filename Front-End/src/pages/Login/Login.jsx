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
          <div class='segunda'>Login with your Spotify account
            <div id='auth'>AUTH Spotify</div>
          </div>
          <div class='segunda'>We suggest you other users with similar music taste
           <div>prueba</div>
          </div>
        </div>
        <div id='tercera'>
          <div class='tercera'>Add them to your friends and share your thoughts, artists or playlists</div>
          <div class='tercera'>Watch their posts, profile, favourite artists and genres</div>
        </div>
        <div id='cuarta'>
          Become a bigger community and keep others updated with your favourite music
          <button id='login-button' onClick={loginSpotify}>Get started</button>
          </div>
      </form>
    </div>
    </>
  )
}

export default Login
