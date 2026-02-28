const initialState = { todos:[]}
import {Remove_Todo, Add_Todo} from "./action"
const todoReducer =(state = initialState , action )=>{
    switch(action.type){
        case Add_Todo:
            return{...state ,todos:[...state.todos , action.payload]}

        case Remove_Todo:
            return  {...state  , todos :  state.todos.filter((value , index ) =>
                index != action.payload
            )}    
            default : return state
    }
    
}
export default todoReducer