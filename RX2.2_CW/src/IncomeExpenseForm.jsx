import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addIncome , addExpense} from "./action"


const IncomeExpenseForm = () => {
  const dispatch = useDispatch()

  const [amount , setAmount] = useState(0)
    function handleAddIncome(e){
      dispatch(addIncome(parseFloat(amount) ))
      setAmount(0)
    } 
    function handleAddExpense(e){
       dispatch(addExpense(parseFloat(amount) ))
  // dispatch({type: "Add_Expense" , payload: parseFloat(amount)  })
      setAmount(0)
    } 





  return (
    <div>
      <input type="number"  onChange={(e)=>{
            setAmount(e.target.value)
      }} value={amount}/>
      <button onClick={handleAddIncome}>Add income</button>
      <button onClick={handleAddExpense} >Add expense</button>
    </div>
  )
}

export default IncomeExpenseForm