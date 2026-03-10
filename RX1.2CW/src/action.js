export const Add_Todo =   "Add_Todo"
export const Remove_Todo ="Remove_Todo"
export const addTodo = (text)=>({
  type: Add_Todo,
  payload: text
})

export const RemoveTodo = (index)=>({
  type: Remove_Todo,
  payload: index
})