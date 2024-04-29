import './PostForm.css'
import { useEffect, useState, useRef, useContext } from 'react'
import { addPost } from '../../services/post';
import { UserContext } from '../../contexts/Contexts';

const PostForm = () => {
  const [postInput, setPostInput] = useState("");
  const textAreaRef = useRef(null)
  const {currentUser, setCurrentUser} = useContext(UserContext)
  const [parentId, setParentId] = useState(null)

  useEffect((textAreaRef) => {
    if (textAreaRef) {
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, postInput]);
  const handleInputValue = (event) => {
    const currentValue = event.target?.value;
    setPostInput(currentValue);
  };
  return (
    <>
      <textarea onChange={handleInputValue} name="postContent" autoComplete='on' minLength={1} maxLength={350} required placeholder="Share your thoughts..." ref={textAreaRef} rows={5} value={postInput}/>
      <button id='submit-button' onClick={(e) => {addPost(postInput, currentUser.spotify_id, parentId)}}>POST COMMENT</button>
    </>
  )
}

export default PostForm
