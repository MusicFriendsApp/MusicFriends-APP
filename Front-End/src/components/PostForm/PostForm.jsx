import './PostForm.css'
import { useEffect, useState, useRef } from 'react'

const PostForm = () => {
  const [postInput, setPostInput] = useState("");
  const textAreaRef = useRef(null)
  useEffect((textAreaRef, postInput) => {
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
    <form>
      <textarea onChange={handleInputValue} name="postContent" autoComplete='on' minLength={1} maxLength={350} required placeholder="Share your thoughts..." ref={textAreaRef} rows={5} value={postInput}/><input type="submit" value="POST COMMENT" />
    </form>
  )
}

export default PostForm
