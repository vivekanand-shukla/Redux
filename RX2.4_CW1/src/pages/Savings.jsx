import React, { useEffect } from 'react'
import {useSelector , useDispatch} from "react-redux"
import {fetchExpenses , fetchIncome}  from "../action"
const Savings = () => {
  const dispatch  = useDispatch()
    useEffect(()=>{
dispatch(fetchExpenses())
    },[])
    useEffect(()=>{
dispatch(fetchIncome())
    },[])

  const expense = useSelector((state)=>state.expense)
  const income  = useSelector((state)=>state.income)
  console.log(expense)
  const totalExpenses = expense.reduce((acc ,crr )=>  crr.amount + acc ,0)
    const totalIncome = income.reduce((acc ,crr )=>  crr.amount + acc ,0)
    const totalSavings = totalIncome -totalExpenses
  return (
    <div>
      <h1>Saving  page</h1>
      <h2>Total saving  : ${totalSavings }</h2>
      
    </div>
  )
}

export default Savings