import {useEffect} from "react"
import {useSelector , useDispatch} from "react-redux"
import {fetchStorage} from "../action"
import {removeFromStorage} from "../action"
function Inventory(){

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchStorage())
  },[])

  const items = useSelector(state => state.storageItems)
 console.log(items)
  const total = items.reduce(
    (acc , curr)=> acc + curr.itemQuantity ,
    0
  )

  const handleRemove = (itemName) => {
  dispatch(removeFromStorage({
    itemName,
    quantity:1
  }))
}

  return(
    <div>

      <h1>Inventory Items</h1>

      <ul>
{items.map((item , index)=>(
  <li key={index}>
    {item.itemName} : {item.itemQuantity}

    <button
    onClick={()=>handleRemove(item.itemName)}
    >
    Remove
    </button>

  </li>
))}
</ul>

      <h2>Total Inventory Items: {total}</h2>

    </div>
  )
}

export default Inventory