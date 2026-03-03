const initialState = {
    income : [],
    expense :[],
    Savings :[]
}
const finenceReducer = (state =initialState , action )=>{
    switch(action.type){
        case  "Fetch_Income_Success": 
        return{
            ...state , income : action.payload
        }
        case  "Fetch_Expenses_Success": 
        return{
            ...state ,  expense: action.payload
        }
        case  "Fetch_Saving_Success": 
        return{
            ...state ,  Savings: action.payload
        }
        case  "Add_Entry_Success": 
        if(action.payload.entryType === "income"){

            return{
                ...state ,  income: [...state.income , action.payload]
            }
        }else{

             return{
                ...state , expense : [...state.expense , action.payload]
            }

        }

        default: return state
    }
}

export default finenceReducer




