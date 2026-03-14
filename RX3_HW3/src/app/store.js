import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "../features/tasks/taskslice"

export default configureStore({
    reducer:{
        tasks: taskReducer
    }
})