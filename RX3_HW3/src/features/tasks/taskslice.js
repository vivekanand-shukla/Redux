import { createSlice } from "@reduxjs/toolkit"

export const taskSlice = createSlice({
    name: "tasks",

    initialState:{
        tasks:[
            {
                date:"15/07/2024",
                items:[
                    {id:"t1", task:"Get Groceries from the market", status:"Pending"},
                    {id:"t2", task:"Go to Gym", status:"Completed"},
                    {id:"t3", task:"Water the plants", status:"Completed"}
                ]
            },
            {
                date:"16/07/2024",
                items:[
                    {id:"t4", task:"Go to the park", status:"Completed"},
                    {id:"t5", task:"Get my room cleaned", status:"Pending"}
                ]
            }
        ]
    },

    reducers:{
        toggleStatus:(state,action)=>{
            
            const {date,id} = action.payload

            const day = state.tasks.find(d => d.date === date)

            const task = day.items.find(t => t.id === id)

            task.status = task.status === "Pending" ? "Completed" : "Pending"
        }
    }

})

export const {toggleStatus} = taskSlice.actions
export default taskSlice.reducer