import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const  frtchPots=createAsyncThunk("posts/fetchPosts" , async()=>{
    const resposne = await axios.get("https://social-media-cw-server-student-neog.replit.app/posts")
    console.log(resposne)
    return resposne.data
})







export const postSilce = createSlice({
    name: "Posts",
    initialState :{
        posts:[
            {
                postId : "P001",
                caption :"learning redux Toolkit",
                lines: 22,
                user: {
                    userId : "u123",
                    name:"john doe"
                }
            },
            // {
            //     postId : "P002",
            //     caption :"it is fun to learn redux toolkit",
            //     lines: 18,
            //     user: {
            //         userId : "u123",
            //         name:"john doe"
            //     }
            // }
        ]
        ,
        status :"idle",
        error : null
    },
    reducers :{
        likeButtonPressed : (state , action )=>{
            const postIndex = state.posts.findIndex(post => post.postId === action.payload)
            state.posts[postIndex].lines =  state.posts[postIndex].lines  +1
        }
    },
    extraReducers :(builder) =>{
     builder.addCase(frtchPots.pending ,(state)=>{
         state.status = "loading"
     } )
     builder.addCase(frtchPots.fulfilled ,(state ,action)=>{
        state.status = "success"
         state.posts = action.payload.posts
     } )
     builder.addCase(frtchPots.rejected ,(state ,action)=>{
        state.status = "error"
         state.error = action.payload.message
     } )
    }
})
export const{ likeButtonPressed} = postSilce.actions
export default postSilce.reducer;