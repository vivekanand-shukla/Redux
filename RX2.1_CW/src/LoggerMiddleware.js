const loggerMiddleware=(store)=>(next)=>(action)=>{


    console.log("current State " , store.getState())
    console.log("Action : " ,action )
    next(action)
    console.log("new State ",store.getState() )
}

export default loggerMiddleware