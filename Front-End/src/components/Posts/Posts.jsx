import './Posts.css'
import SinglePost from '../SinglePost/SinglePost'

const Posts = ({data}) => {
  return (
    <div>
      <SinglePost data={data}/>
    </div>
  )
}

export default Posts
