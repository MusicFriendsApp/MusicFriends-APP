import { loginSpotify } from "../../services/loginSpotify"
import "./Home.css"
import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    if(!localStorage.getItem('token')) {
      loginSpotify()
    }
  }, [])

  return (
    <div id="homepage">
        <h1>THIS IS HOME PAGE</h1>
      
    </div>
  )
}

export default Home
