import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { useState, useContext } from 'react';
import { UserContext } from './contexts/Contexts';


function App() {
  const defaultUser = useContext(UserContext)
  const [currentUser, setCurrentUser] = useState(defaultUser)
	const contextObj = {currentUser, setCurrentUser}

  return (
    <UserContext.Provider value={contextObj}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  )
}

export default App
