import React from 'react'
import { useSelector } from 'react-redux'
const FinnenceSummery = () => {
    const income = useSelector( (state) => state.income )
    const Expense  = useSelector( (state) => state.expenses )
    // const income = useSelector( (state) => state.income )
  return (
    <div>
        <h1>Finence Summery : {}</h1>
        <p>Income  ${income}</p>
        <p>Expense ${Expense} </p>
        <p>Total ${income-Expense} </p>
    </div>
  )
}

export default FinnenceSummery