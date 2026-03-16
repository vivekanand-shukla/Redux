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

    if(type === "addToStore"){
      dispatch(addToStorage({
        itemName,
        itemQuantity: parseInt(quantity),
     entryType: "add"
      }))
    }
    else{
      dispatch(removeFromStorage({
        itemName,
        itemQuantity: parseInt(quantity),
            entryType: "remove"
      }))
    }

    setItemName("")
    setQuantity("")
    setType("")
  }

  return(
    <div>

      <h1>Inventory Admin App</h1>

      <form  onSubmit={handleAdd}>

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
          <option value="addToStore">Add to Storage</option>
          <option value="removeFromStore">Remove from Storage</option>
        </select>

        <button type="submit">
          Add Item Data
        </button>

      </form>

    </div>
  )
}

export default AddItems