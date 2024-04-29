import './SuggestedFriend.css'
import { useEffect, useState } from 'react'
import { getCurrentUser, getAllUsers, getOneUser } from '../../services/user'
import { getUserGenres } from '../../services/genre'
import SuggestedFriendCard from '../SuggestedFriendCard/SuggestedFriendCard'

export const SuggestedFriend = () => {
  const [currentUser, setCurrentUser] = useState([])
  const [userList, setUserList] = useState([])
  const [renderSuggestions, setRenderSuggestions] = useState([])

  useEffect(() => {
    async function getUserData() {
      try {
        const spotify_id = localStorage.getItem('spotify_id')
        const allUsers = await getAllUsers()
        const profile = await getCurrentUser(spotify_id)
        setCurrentUser(profile)
        setUserList(allUsers)
      } catch (error) {
        console.error(error.message)
      }
    }
    getUserData()
  }, [])

  useEffect(() => {
    async function getAllGenres() {
      try {
        const currentUserGenres = await getUserGenres(currentUser.id)
        const allUsersGenres = await Promise.all(
          userList.map(async (user) => {
            return await getUserGenres(user.id)
          })
        )
        const filteredUsers = allUsersGenres.map((user) => {
          return user.filter((user) => {
            return user.userId !== currentUser.id
          })
        }).filter((user) => {
          return user.length > 0
        })
        const suggestedFriends = await Promise.all(filteredUsers.map(async (userSuggestion) => {
          return await getOneUser(userSuggestion[0].userId)
        }))
        setRenderSuggestions(suggestedFriends)
      } catch (error) {
        console.log(error)
      }
    }
    getAllGenres()
  }, [userList])

  return (
    <>
      <div id='suggestions-container'>
        {renderSuggestions && renderSuggestions.map((data) => {
          return <SuggestedFriendCard data={data}/>
        })}
      </div>
    </>
  )
}
