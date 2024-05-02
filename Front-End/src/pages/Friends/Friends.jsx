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
  }, [])

  if (isLoading) {
    return <img id="loading-image" src={loadingImage} />
  }

  if (!friendsList || friendsList.length === 0) {
    return <h1>You have no friends yet here! We'll find someone for you soon</h1>
  }

  return (
    <div id="friends-container">
      {friendsList && friendsList.map((friend) => (
        friend && <UserCard key={friend.id} data={friend} isFriendChecked={true}/>
      ))}
    </div>
  )
}
