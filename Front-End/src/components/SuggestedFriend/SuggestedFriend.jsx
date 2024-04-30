import './SuggestedFriend.css'
import { useEffect, useState } from 'react'
import { getCurrentUser, getAllUsers, getOneUser, checkFriend } from '../../services/user'
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
    async function filterSuggestions() {
      if (!currentUser || userList.length === 0) return;
      try {
        const currentUserGenres = await getUserGenres(currentUser.id);
        const suggestions = await Promise.all(
          userList.filter(user => user.id !== currentUser.id).map(async user => {
            const isFriend = await checkFriend(currentUser.id, user.id);
            return isFriend ? null : user;
          })
        );
        const validSuggestions = suggestions.filter(user => user !== null);
        setRenderSuggestions(validSuggestions);
      } catch (error) {
        console.error('Error filtering suggestions:', error);
      }
    }
    filterSuggestions();
  }, [currentUser, userList]);

  return (
    <>
      <div id='suggestions-container'>
        {renderSuggestions.length > 0 ? renderSuggestions.map((data) => {
          return <SuggestedFriendCard key={data.id} data={data}/>
        }) : <p>You already follow everyone!</p>}
      </div>
    </>
  )
}
