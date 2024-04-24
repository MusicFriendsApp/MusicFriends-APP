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
    <>
    <div id="homepage">
        <br/>
        <div id="content-left">Content left
          <div className="content-left-item">content-left-item</div>
        </div>
        
        <div id="content-right">Content right
          <div className="content-rigth-item">content-rigth-item</div>
        </div>
      
    </div>
    </>
  )
}

export default Home
