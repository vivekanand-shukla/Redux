import React, { useEffect } from 'react'
import {useSelector , useDispatch} from "react-redux"
import {fetchIncome}  from "../action"
const Income = () => {
  const dispatch  = useDispatch()
    useEffect(()=>{
dispatch(fetchIncome())
    },[])

  const income = useSelector((state)=>state.income)
  console.log("hi",income)
  const totalIncome = income.reduce((acc ,crr )=>  crr.amount + acc ,0)
  return (
    <div>
      <h1>Income page</h1>
      <ul>{income.map((salary ,index)=>{
        <li key={index}>{salary.description} : ${salary.amount}</li>
      })}</ul>
      <h2> income Total : {totalIncome}</h2>
    </div>
  )
}

export default Income