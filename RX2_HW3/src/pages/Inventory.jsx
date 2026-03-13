import {useEffect} from "react"
import {useSelector , useDispatch} from "react-redux"
import {fetchStorage} from "../action"

function Inventory(){

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchStorage())
  },[])

  const items = useSelector(state => state.storageItems)

  const total = items.reduce(
    (acc , curr)=> acc + curr.quantity ,
    0
  )

  return(
    <div>

      <h1>Inventory Items</h1>

      <ul>
        {items.map((item , index)=>(
          <li key={index}>
            {item.itemName} : {item.quantity}
          </li>
        ))}
      </ul>

      <h2>Total Inventory Items: {total}</h2>

    </div>
  )
}

export default Inventory