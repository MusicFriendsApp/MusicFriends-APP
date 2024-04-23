import './Login.css'
import { loginSpotify } from '../../services/loginSpotify'

const Login = () => {

  return (
    <div id='loginpage'>
      <h1>This is the Login page</h1>
      <button onClick={loginSpotify}>Log In</button>
    </div>
  )
}

export default Login
