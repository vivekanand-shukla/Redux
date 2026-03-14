import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {toggleStatus} from "./taskslice"

const TaskList = () => {

const dispatch = useDispatch()

const tasks = useSelector((state)=>{
    return state.tasks.tasks
})

return (

<div>

<h1>My Task List</h1>

{
tasks.map((day)=>(
<div key={day.date}>

<h2>{day.date}</h2>

<ul>

{
day.items.map((task)=>(
<li key={task.id}>

{task.task}

<button
onClick={()=>dispatch(toggleStatus({date:day.date,id:task.id}))}
style={{marginLeft:"10px"}}
>
{task.status}

</button>

</li>
))
}

</ul>

</div>
))
}

</div>

)
}

export default TaskList