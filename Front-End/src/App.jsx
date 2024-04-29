import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { useState, useContext } from 'react';
import { PostContext, UserContext } from './contexts/Contexts';


function App() {
  const defaultUser = useContext(UserContext)
  const defaultPost = useContext(PostContext)
  const [currentUser, setCurrentUser] = useState(defaultUser)
  const [send, setSend] = useState(defaultPost)
	const contextObj = {currentUser, setCurrentUser}
  const contextPost = {send, setSend}

  return (
    <UserContext.Provider value={contextObj}>
      <PostContext.Provider value={contextPost}>
        <RouterProvider router={router} />
      </PostContext.Provider>
    </UserContext.Provider>
  )
}

export default App
