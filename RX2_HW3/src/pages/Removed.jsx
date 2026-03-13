import {useEffect} from "react"
import {useDispatch , useSelector} from "react-redux"
import {fetchRemoved} from "../action"

function Removed(){

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchRemoved())
  },[])

  const items = useSelector(state => state.removedItems)

  const total = items.reduce(
    (acc , curr)=> acc + curr.quantity ,
    0
  )

  return(
    <div>

      <h1>Removed Items From Inventory</h1>

      <ul>
        {items.map((item , index)=>(
          <li key={index}>
            {item.itemName} : {item.quantity}
          </li>
        ))}
      </ul>

      <h2>Removed Items Total: {total}</h2>

    </div>
  )
}

export default Removed