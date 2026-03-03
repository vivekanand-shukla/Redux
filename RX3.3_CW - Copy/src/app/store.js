import { configureStore} from "@reduxjs/toolkit"
import { postSilce } from "../feaures/Posts/postslice"
export default configureStore({
    reducer:{
     posts:    postSilce.reducer
    }
})