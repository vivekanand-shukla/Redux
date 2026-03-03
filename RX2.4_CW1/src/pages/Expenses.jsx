import React, { useEffect } from 'react'
import {useSelector , useDispatch} from "react-redux"
import {fetchExpenses}  from "../action"
const Expenses = () => {
  const dispatch  = useDispatch()
    useEffect(()=>{
dispatch(fetchExpenses())
    },[])

  const expense = useSelector((state)=>state.expense)
  console.log(expense)
  const totalExpenses = expense.reduce((acc ,crr )=>  crr.amount + acc ,0)
  return (
    <div>
      <h1>Income page</h1>
      <ul>{expense.map((salary ,index)=>{
        <li key={index}>{salary.description} : ${salary.amount}</li>
      })}</ul>
      <h2> income Total : {totalExpenses}</h2>
    </div>
  )
}

export default Expenses