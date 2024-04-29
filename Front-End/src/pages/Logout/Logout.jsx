import './Logout.css'
import { useEffect, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/Contexts';

function Logout() {
  const [clearedData, setClearedData] = useState(null)
  const {currentUser, setCurrentUser} = useContext(UserContext)
  useEffect(() => {
    function clearStorage() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('expires_in');
      localStorage.removeItem('spotify_id');
      localStorage.removeItem('verifier');
      sessionStorage.removeItem('register');
      setClearedData(true)
      setCurrentUser(null)
    }
    clearStorage()
  }, [])
  
  return (
    <>
      <div>Logging out...</div>
      {clearedData && <Navigate to="/" replace={true} />}
    </>
  )
}

export default Logout