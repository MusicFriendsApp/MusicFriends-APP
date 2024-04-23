import './Home.css'
import { loginSpotify } from '../../services/loginSpotify'

const Home = () => {



  return (
    <div id='homepage'>
      <h1>This is the home page</h1>
      <button onClick={loginSpotify()}>Log In</button>
    </div>
  )
}

export default Home
