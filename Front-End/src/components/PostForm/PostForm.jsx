import './PostForm.css'
import { useEffect, useState, useRef, useContext } from 'react'
import { addPost } from '../../services/post';
import { PostContext, UserContext } from '../../contexts/Contexts';

const PostForm = () => {
  const [postInput, setPostInput] = useState('');
  const textAreaRef = useRef(null)
  const {currentUser, setCurrentUser} = useContext(UserContext)
  const {send, setSend} = useContext(PostContext)
  const [parentId, setParentId] = useState(null)

  useEffect((textAreaRef) => {
    if (textAreaRef) {
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, postInput]);
  const handleInputValue = (event) => {
    const currentValue = event.target.value;
    setPostInput(currentValue);
  };

  const handlePost = (e) => {
    e.preventDefault()
    if(postInput !== '') {
      addPost(postInput, currentUser.spotify_id, parentId)
      setSend(true)
    } else {
      alert('Please type something to post')
    }
  }

  useEffect(() => {
    const clearInput = () => {
      setPostInput('')
      setSend(false)
    }
    if(send === true) {
      clearInput()
    }
  }, [send])
  
  return (
    <>
      <form>
        <textarea onChange={handleInputValue} name="postContent" autoComplete='on' minLength={1} maxLength={350} required placeholder="Share your thoughts..." ref={textAreaRef} rows={5} value={postInput}/>
        <button id='submit-button' onClick={(e) => {handlePost(e)}}>POST COMMENT</button>
      </form>
    </>
  )
}

export default PostForm
