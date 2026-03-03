import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { likeButtonPressed} from "./postslice"
const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state)=>{
    // console.log(state.posts)
    return state.posts
  })
  console.log(posts.posts.map(p => p))


  return (
    <div>
    {
   posts.posts.map((post)=>
       <div key={post.postId}>
         <p>caption: {post.caption}</p>
        {/* <p>Likes : {post.lines}</p> 
         */}
         <button onClick={()=>{ dispatch(likeButtonPressed(post.postId)) }} > {post.lines} likes</button>
       </div>
    )
        }
    </div>
  )
}

export default Posts