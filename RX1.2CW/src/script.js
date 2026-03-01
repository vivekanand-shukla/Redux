import {createStore, } from "redux"
import todoReducer from "./todosReducer"
import {addTodo, RemoveTodo} from "./action"
export function setupRedux(){

    
const todoInput = document.querySelector("#todoInput")
const addTodos = document.querySelector("#addTodo")
const todoList = document.querySelector("#todoList")




 const store = createStore(todoReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 store.subscribe(()=>{
    console.log(store.getState())
    updateTodoList()
 })




function addTodoHAndler(){
    const todoValue = todoInput.value
    if(todoValue){
        store.dispatch(addTodo(todoValue))
    }
}

window.removeTodoHandler=(index)=>{
    store.dispatch(RemoveTodo(index))
}

const updateTodoList=()=>{
    const state = store.getState()
    todoList.innerHTML = state.todos.map((todo, index) =>{
      
      return  `<li >${todo} <button onClick="removeTodoHandler(${index})" >Remove</button></li>`
    }).join("")
        
    }
    addTodos.addEventListener("click", addTodoHAndler)
updateTodoList()
}