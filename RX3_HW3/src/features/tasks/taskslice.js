import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchTasks = createAsyncThunk(
"tasks/fetchTasks",
async () => {

const response = await axios.get(
"https://task-list-hw-server-Student-neoG-Ca.replit.app/tasks"
)

return response.data
}
)

export const taskSlice = createSlice({
name:"tasks",

initialState:{
tasks:[],
status:"idle",
error:null
},

reducers:{
toggleStatus:(state,action)=>{

const {date,id} = action.payload

const day = state.tasks.find(d => d.date === date)

const task = day.items.find(t => t.id === id)

task.status = task.status === "Pending" ? "Completed" : "Pending"

}
},

extraReducers:(builder)=>{

builder.addCase(fetchTasks.pending,(state)=>{
state.status = "loading"
})

builder.addCase(fetchTasks.fulfilled,(state,action)=>{
state.status = "success"
state.tasks = action.payload.tasks
})

builder.addCase(fetchTasks.rejected,(state,action)=>{
state.status = "error"
state.error = action.error.message
})

}

})

export const {toggleStatus} = taskSlice.actions
export default taskSlice.reducer