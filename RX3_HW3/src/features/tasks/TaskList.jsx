import React, {useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import {toggleStatus, fetchTasks} from "./taskslice"

const TaskList = () => {

const dispatch = useDispatch()

const {tasks,status,error} = useSelector((state)=>state.tasks)

useEffect(()=>{
dispatch(fetchTasks())
},[])

return (

<div>

<h1>My Task List</h1>

{status === "loading" && <p>Loading...</p>}
{error && <p>{error}</p>}

{
tasks?.map((day)=>(
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