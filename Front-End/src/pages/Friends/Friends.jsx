import './Friends.css'
import loadingImage from "../../assets/loading.gif"
import { useState, useEffect, useContext } from 'react'
import { getAllUsers, checkFriend } from '../../services/user'
import UserCard from '../../components/UserCard/UserCard'
import { UserContext } from '../../contexts/Contexts'

export const Friends = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [friendsList, setFriendsList] = useState([])
  const { currentUser, setCurrentUser } = useContext(UserContext)

  useEffect(() => {
    const getFriendsList = async () => {
      setIsLoading(true)
      try {
        const allUsers = await getAllUsers()
        const friends = []
        for (const user of allUsers) {
          const friendInfo = await checkFriend(currentUser.id, user.id)
          if (friendInfo !== null) {
            friends.push(user)
          }
        }
        setFriendsList(friends)
      } catch (error) {
        console.error('Error fetching friends list:', error)
      } finally {
        setIsLoading(false)
      }
    }
    getFriendsList()
  }, [currentUser.id])

  if (isLoading) {
    return <img id="loading-image" src={loadingImage} />
  }

  return (
    <div id="friends-container">
      {friendsList.map((friend) => (
        friend && <UserCard key={friend.id} data={friend} />
      ))}
    </div>
  )
}
