import { useState } from "react";
import {useDispatch} from "react-redux"
import { addEntry  ,addExpense} from "../action";
function NewEntry() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [entryType, setEntryType] = useState("");
const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ description, amount, entryType });
  };

  const handleAddEntry = (e)=>{
             e.preventDefault();
             
             if(entryType === "income"){

               dispatch(addEntry({ description , amount : parseFloat(amount) , entryType }))
              }else{
               dispatch(addExpense({ description , amount : parseFloat(amount) , entryType }))

             }
              setDescription("")
              setAmount("")
              setEntryType("")
  }

  return (
    <>
      <h1>New Entry Page</h1>

      <form className="form"
      //  onSubmit={handleSubmit}
       >
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label>Entry Type:</label>
        <select
         value={entryType}
  onChange={(e) => setEntryType(e.target.value)}
        >
         <option value="">Select</option>
  <option value="income">Income</option>
  <option value="expense">Expense</option>
  <option value="savings">Savings</option>
        </select>

        <button type="submit" onClick={handleAddEntry}>Add Entry</button>
      </form>
    </>
  );
}

export default NewEntry;