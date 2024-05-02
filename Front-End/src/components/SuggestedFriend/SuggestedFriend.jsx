import './SuggestedFriend.css'
import { useEffect, useState } from 'react'
import { getCurrentUser, getAllUsers, checkFriend } from '../../services/user'
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
            const suggestedUserGenres = await getUserGenres(user.id)
            
            const isFriend = await checkFriend(currentUser.id, user.id);
            if (isFriend) {
              return null
            } else {
              const commonGenres = suggestedUserGenres.filter((obj) =>  {
                  return currentUserGenres.filter((genre) => {
                  return genre.genreId === obj.genreId
                  })
                })
              return commonGenres.length > 0 ? user : null;
            } // Filter out current
            
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

  const randomColor = () => {
    const randomColorArray = ['#b761bc', '#1db954', '#d7dbdc', '#86b3f6', '#e38417']
    const selectRandom = Math.floor(Math.random() * 5)
    return randomColorArray[selectRandom]
  }

  return (
    <>
      <div id='suggestions-container'>
      <h3>PEOPLE TO CONNECT</h3>
        {renderSuggestions.length > 0 ? renderSuggestions.map((data) => {
          return <SuggestedFriendCard key={data.id} data={data} randomColor={randomColor()}/>
        }) : <p>We'll find someone for you soon!</p>}
      </div>
    </>
  )
}
