import {applyMiddleware , createStore } from "redux"
import {thunk } from "redux-thunk"
import finenceReducer from "./Reducer"
const store = createStore(finenceReducer , applyMiddleware(thunk))
export default store