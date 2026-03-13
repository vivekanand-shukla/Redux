import {useState} from "react"
import {useDispatch} from "react-redux"
import {addToStorage , removeFromStorage} from "../action"

function AddItems(){

  const [itemName , setItemName] = useState("")
  const [quantity , setQuantity] = useState("")
  const [type , setType] = useState("")

  const dispatch = useDispatch()

  const handleAdd = (e)=>{
    e.preventDefault()

    if(type === "add"){
      dispatch(addToStorage({
        itemName,
        quantity: parseInt(quantity)
      }))
    }
    else{
      dispatch(removeFromStorage({
        itemName,
        quantity: parseInt(quantity)
      }))
    }

    setItemName("")
    setQuantity("")
    setType("")
  }

  return(
    <div>

      <h1>Inventory Admin App</h1>

      <form>

        <label>Item Name:</label>
        <input
        value={itemName}
        onChange={(e)=>setItemName(e.target.value)}
        />

        <label>Item Quantity:</label>
        <input
        type="number"
        value={quantity}
        onChange={(e)=>setQuantity(e.target.value)}
        />

        <label>Entry Type:</label>

        <select
        value={type}
        onChange={(e)=>setType(e.target.value)}
        >
          <option value="">Select</option>
          <option value="add">Add to Storage</option>
          <option value="remove">Remove from Storage</option>
        </select>

        <button onClick={handleAdd}>
          Add Item Data
        </button>

      </form>

    </div>
  )
}

export default AddItems