import './SuggestedFriend.css'
import { useEffect, useState } from 'react'
import { getCurrentUser, getAllUsers, getOneUser } from '../../services/user'
import { getUserGenres } from '../../services/genre'
import SuggestedFriendCard from '../SuggestedFriendCard/SuggestedFriendCard'

export const SuggestedFriend = () => {
  const [currentUser, setCurrentUser] = useState([])
  const [userList, setUserList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [userGenres, setUserGenres] = useState({})
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
        })
        const suggestedFriends = await Promise.all(filteredUsers.map(async (userSuggestion) => {
          if (userSuggestion.length > 0) {
            const suggestedUser = await Promise.all(userSuggestion.map(async (user) => {
                return await getOneUser(user.userId)
              })
            )
            return suggestedUser
          }
        }))
        const toRenderSuggestions = suggestedFriends.filter((user) => {
          return user !== undefined
        })
        console.log(toRenderSuggestions)
        setRenderSuggestions(...toRenderSuggestions)
        console.log(renderSuggestions)
      } catch (error) {
        console.log(error)
      }
    }
    getAllGenres()
  }, [userList])

  useEffect(() => {
    async function getAllRelatedUsersByGenres() {
      try {
      } catch (error) {
        console.log(error)
      }
    }

    getAllRelatedUsersByGenres()
  }, [])

  return (
    <>
      <h6>{renderSuggestions && renderSuggestions.map((data) => {
        return <SuggestedFriendCard data={data}/>
      })}</h6>
    </>
  )
}
