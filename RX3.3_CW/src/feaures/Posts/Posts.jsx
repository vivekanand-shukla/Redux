import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { likeButtonPressed , frtchPots} from "./postslice"


import { useEffect } from 'react'
const Posts = () => {
  const dispatch = useDispatch()
  const { posts , status ,error }= useSelector((state)=>{
    // console.log(state.posts)
    return state
  })
  console.log(posts.posts.map(p => p))

  useEffect(()=>{
    dispatch(frtchPots())
  },[])

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {error && <p>{error}</p>}
    {
   posts?.posts?.map((post)=>
       <div key={post?.postId}>
         <p>caption: {post?.caption}</p>
        {/* <p>Likes : {post.lines}</p> 
         */}
         <button onClick={()=>{ dispatch(likeButtonPressed(post.postId)) }} > {post?.lines} likes</button>
       </div>
    )
        }
    </div>
  )
}

export default Posts