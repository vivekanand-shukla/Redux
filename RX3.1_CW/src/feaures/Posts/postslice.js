import {createSlice} from "@reduxjs/toolkit"
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
            {
                postId : "P002",
                caption :"it is fun to learn redux toolkit",
                lines: 18,
                user: {
                    userId : "u123",
                    name:"john doe"
                }
            }
        ]
    },
    reducers :{
        likeButtonPressed : (state , action )=>{
            const postIndex = state.posts.findIndex(post => post.postId === action.payload)
            state.posts[postIndex].lines =  state.posts[postIndex].lines  +1
        }
    }
})
export const{ likeButtonPressed} = postSilce.actions
export default postSilce.reducer;