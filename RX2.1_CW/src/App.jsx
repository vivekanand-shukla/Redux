
import {useDispatch , useSelector } from "react-redux"


function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state)=> state.counter)

  function handleClick(type ){
  dispatch({type})
  }


  return (
    <>
      <div>
         <div>Counter : {counter}</div>
        <button onClick={(event)=>{
          handleClick("add")
        }}>
          add
        </button>
        <button onClick={(event)=>{
          handleClick("minus")
        }}>minus</button>
      </div>
    </>
  )
}

export default App
