import { setupRedux } from "./script";




document.querySelector('#app').innerHTML = `
  <div>
  

  <section class="container py-4">
    <h1>Todo List</h1>
    <input id="todoInput" type="text" placeholder="Add a new todo" />
    <button id="addTodo">Add</button>

    <ul id="todoList"></ul>
  </section>


  </div>
`

setupRedux()


