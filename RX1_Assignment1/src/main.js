import {setupRedux} from "./script"



document.querySelector('#app').innerHTML = `
<div>

<h2>Add Task</h2>

<input id="taskId" type="number" placeholder="Task ID">
<input id="taskName" type="text" placeholder="Task Name">
<button id="addTask">Add Task</button>

<h2>Remove Task</h2>

<input id="removeId" type="number" placeholder="Task ID">
<button id="removeTask">Remove Task</button>

<h2>Tasks</h2>

<ul id="taskList"></ul>

<p id="totalTasks"></p>

</div>
`
setupRedux()