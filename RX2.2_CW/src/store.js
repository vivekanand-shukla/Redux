import { createStore ,applyMiddleware} from "redux"
import finenceReducer from "./finenceReducer"
import loggermiddleware from "./loggermiddleware"
export default createStore(finenceReducer, applyMiddleware(loggermiddleware))