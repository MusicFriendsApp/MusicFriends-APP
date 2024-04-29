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
    <div id='loginpage'>
      <form id='login-form'>
        <h1>Find new friends with matching {options} with your Spotify</h1>
        <div>
          <button id='login-button' onClick={loginSpotify}>Log In</button>
          <div id='checkbox-container'>
            <input id='terms' type='checkbox' required/>
            <p>You accept to be redirected to the Spotify login</p>
          </div>
        </div>
      </form>
      <div id='primera'>hello</div>
    </div>
  )
}

export default Login
