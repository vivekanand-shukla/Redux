export const addEntry=(entry)=> async (dispatch)=>{


    try {
        const response = await fetch("https://finance-app-backend-Student-neoG.replit.app/add-income" ,{method :"POST" , headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(entry)
    
    
    })

    const data = await response.json()
    if(data.success === true){
        dispatch({ type: "Add_Entry_Success" , payload : data.data})
        console.log(data)
    }
        
    } catch (error) {
        console.error("Error adding entry ",error)
    }
}
export const addExpense=(entry)=> async (dispatch)=>{


    try {
        const response = await fetch("https://finance-app-backend-Student-neoG.replit.app/add-expense" ,{method :"POST" , headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(entry)
    
    
    })

    const data = await response.json()
    if(data.success === true){
        dispatch({ type: "Add_Entry_Success" , payload : data.data})
        console.log(data)
    }
        
    } catch (error) {
        console.error("Error adding entry ",error)
    }
}

export const fetchIncome = ()=> async(dispatch)=>{
    try {

         const response = await fetch("https://finance-app-backend-Student-neoG.replit.app/income")

    const data = await response.json()
    if(data ){
  dispatch({ type: "Fetch_Income_Success" , payload : data})
    }
        
    } catch (error) {
         console.error("Error fetching income ",error)
    }

}
export const fetchExpenses = ()=> async(dispatch)=>{
    try {

         const response = await fetch("https://finance-app-backend-Student-neoG.replit.app/expenses")

    const data = await response.json()
    if(data ){
  dispatch({ type: "Fetch_Expenses_Success" , payload : data})
    }
        
    } catch (error) {
         console.error("Error fetching Expenses ",error)
    }

}