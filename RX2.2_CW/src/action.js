export const addIncome=(amount)=>{
  return {
     type:"Add_Income",
     payload: amount
  }
}

export const addExpense=(amount)=>{
  return {
     type:"Add_Expense",
     payload: amount
  }
}



