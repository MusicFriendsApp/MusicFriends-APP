import './Login.css'
import { loginSpotify } from '../../services/loginSpotify'
import { useState, useEffect } from 'react'

import Button from '@mui/material/Button';

const Login = () => {

  const [options, setOptions] = useState('music')
  const [count, setCount] = useState(0)
  const optionsData = ['artists', 'genres', 'songs', 'common friends']

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
        <Button variant="outlined">Outlined</Button>
        <div id='checkbox-container'>
          <input id='terms' type='checkbox' required/>
          <p>You accept to be redirected to the Spotify login</p>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Login
