import {createStore} from "redux"
import taskReducer from "./reducer"
import {
addTask,
removeTask,
toggleTask,
calculateTotalTasks
} from "./action"

export function setupRedux(){

const taskIdInput = document.querySelector("#taskId")
const taskNameInput = document.querySelector("#taskName")
const addBtn = document.querySelector("#addTask")

const removeIdInput = document.querySelector("#removeId")
const removeBtn = document.querySelector("#removeTask")

const taskList = document.querySelector("#taskList")
const totalText = document.querySelector("#totalTasks")

const store = createStore(
taskReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(()=>{
renderTasks()
})

function renderTasks(){

const state = store.getState()

taskList.innerHTML = state.tasks.map(task => {

return `
<li>
<input type="checkbox"
${task.completed ? "checked" : ""}
onclick="toggleHandler(${task.id})">
${task.id}
${task.name} ${task.completed ? "(Completed)" : ""}
</li>
`

}).join("")

totalText.innerText = `Total Tasks: ${state.totalTasks}`

}

window.toggleHandler = (id)=>{
store.dispatch(toggleTask(id))
store.dispatch(calculateTotalTasks())
}

addBtn.addEventListener("click", ()=>{

const task = {
id: Number(taskIdInput.value),
name: taskNameInput.value,
completed:false
}

store.dispatch(addTask(task))
store.dispatch(calculateTotalTasks())

})

removeBtn.addEventListener("click", ()=>{

store.dispatch(removeTask(Number(removeIdInput.value)))
store.dispatch(calculateTotalTasks())

})

renderTasks()

}