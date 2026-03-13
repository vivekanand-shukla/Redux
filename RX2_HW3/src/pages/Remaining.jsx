import {useEffect} from "react"
import {useDispatch , useSelector} from "react-redux"
import {fetchRemoved , fetchStorage} from "../action"

function Remaining(){

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchStorage())
    dispatch(fetchRemoved())
  },[])

  const storage = useSelector(state => state.storageItems)
  const removed = useSelector(state => state.removedItems)

  const totalStorage = storage.reduce(
    (acc , curr)=> acc + curr.quantity ,0
  )

  const totalRemoved = removed.reduce(
    (acc , curr)=> acc + curr.quantity ,0
  )

  const remaining = totalStorage - totalRemoved

  return(
    <div>

      <h1>Remaining Items in Inventory</h1>

      <h2>Inventory Total: {remaining}</h2>

    </div>
  )
}

export default Remaining