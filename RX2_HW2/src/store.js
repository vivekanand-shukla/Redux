import {createStore ,applyMiddleware} from "redux"
import bookReducer from "./bookReducer"
import loggermiddleware from "./loggerMiddleWare"
export default createStore(bookReducer , applyMiddleware(loggermiddleware))