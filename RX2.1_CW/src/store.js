import {createStore , applyMiddleware} from "redux"
import loggerMiddleware from "./LoggerMiddleware"
let initialState = {
    counter: 0
}

const counterReducer=(state = initialState , action)=>{
    switch(action.type){
        case "add" : return {
              ...state , counter:state.counter + 1 
        }
        case "minus" : return {
              ...state , counter:state.counter - 1 
        }
        default:
            return state

    }

}
const store = createStore(counterReducer ,applyMiddleware(loggerMiddleware))
export default store