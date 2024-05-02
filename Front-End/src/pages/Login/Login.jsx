import './Login.css'
import { loginSpotify } from '../../services/loginSpotify'
import { useState, useEffect } from 'react'
import exampleCard from "../../assets/card.png"
import exampleAuth from "../../assets/auth-spotify.png"
import suggestExample from "../../assets/suggest.png"
import examplePosts from "../../assets/posts.png"
import usersExample from "../../assets/watch-removebg-preview.png"

const Login = () => {

  const [options, setOptions] = useState('MUSIC')
  const [count, setCount] = useState(0)
  const [alert, setAlert] = useState(null)
  const optionsData = ['ARTISTS', 'GENRES', 'SONGS', 'PLAYLISTS']

  const [isChecked, setIsChecked] = useState('disabled')

  const checkBoxHandler = (e) => {
    return isChecked === 'disabled' ? setIsChecked('') : setIsChecked('disabled')
  }

  const acceptCondition = () => {
    return isChecked === 'disabled' ? setAlert('You must accept the checkbox below') : loginSpotify()
  }

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
    <div id='login-page'>
      <div id='login-form'>
        <h1>Find new friends with matching {options} with your Spotify <br /> and share with them what you want</h1>
          <button id='login-button' className={isChecked} onClick={acceptCondition}>Log In</button>
          {alert && <p className='alert-check'>{alert}</p>}
          <div className='checkbox-container'>
            <input id='terms' type='checkbox' required onClick={(e) => checkBoxHandler(e)}/>
            <p id='terms-p'>You accept to be redirected to the Spotify login</p>
          </div>
        <div id='primera'> 
          <div className='primera'>Connect with people that listen to the same artists or genres you listen</div>
          <div className='primera'> <img src={exampleCard} alt="" /> </div>
        </div>
        <div id='segunda'>
          <div className='segunda'>Login with your Spotify account
            <div id='auth'> <img src={exampleAuth} alt="" /></div>
          </div>
          <div className='segunda'>We suggest you other users with similar music taste
          <div> <img src={suggestExample} alt="" /> </div>
          </div>
        </div>
        <div id='tercera'>
          <div className='tercera'>Add them to your friends and share your thoughts, artists or playlists
            <div><img src={examplePosts} alt="" /></div>
          </div>
          
          <div className='tercera'>Watch their posts, profile, favourite artists and genres
          
          <div><img src={usersExample} alt="" /></div></div>
        </div>
        <div id='cuarta'>
          <div>
            Become a bigger community and keep others updated with your favourite music
          </div>
          <div>
            <button id='login-button' className={isChecked} onClick={acceptCondition}>Get started</button>
          </div>
          {alert && <p className='alert-check'>{alert}</p>}
          <div className='checkbox-container'>
            <input id='terms' type='checkbox' required onClick={(e) => checkBoxHandler(e)}/>
            <p id='terms-p'>You accept to be redirected to the Spotify login</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
