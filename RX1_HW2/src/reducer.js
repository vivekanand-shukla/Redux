import { ADD_PROFILE , REMOVE_PROFILE , CALCULATE_AVERAGE_AGE } from "./action"

const initialState = { 
    profile: [],
    average: 0
}

const createReducer = (state = initialState , action) => {

    switch(action.type){

        case ADD_PROFILE:
            return {
                ...state,
                profile: [...state.profile, { ...action.payload }]
            }

        case REMOVE_PROFILE:
            return {
                ...state,
                profile: state.profile.filter(p => p.id !== action.payload)
            }

        case CALCULATE_AVERAGE_AGE: {

            const totalAge = state.profile.reduce((acc, p) => acc + p.age, 0)

            const average = state.profile.length
                ? totalAge / state.profile.length
                : 0

            return {
                ...state,
                average
            }
        }

        default:
            return state
    }
}

export default createReducer