
const initialState = { income: 0  , expenses :0}
const finenceReducer=(state = initialState ,action )=>{

 switch(action.type){
    case "Add_Income" : return{
        ...state , income :state.income +action.payload
    }
    case "Add_Expense" : return{
        ...state , expenses :state.expenses +action.payload
    }
    default: 
    return state
 }


}


export default finenceReducer;