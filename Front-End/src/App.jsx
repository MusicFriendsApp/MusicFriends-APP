import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { useState, useContext } from 'react';
import { PostContext, UserContext, AuthContext } from './contexts/Contexts';


function App() {
  const defaultAuth = useContext(AuthContext);
  const defaultUser = useContext(UserContext)
  const defaultPost = useContext(PostContext)
  const [currentUser, setCurrentUser] = useState(defaultUser)
  const [send, setSend] = useState(defaultPost)
  const [isLoggedIn, setIsLoggedIn] = useState(defaultAuth);
	const contextObj = {currentUser, setCurrentUser}
  const contextPost = {send, setSend}
  const contextAuth = {isLoggedIn, setIsLoggedIn}

  return (
    <AuthContext.Provider value={contextAuth}>
      <UserContext.Provider value={contextObj}>
        <PostContext.Provider value={contextPost}>
          <RouterProvider router={router} />
        </PostContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
