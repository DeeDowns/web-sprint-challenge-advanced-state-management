import { POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAILURE } from '../actions/formActions'

const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''

}

export const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_SMURF_SUCCESS: 
            return {
                ...state, 
               smurf: [...state.smurfs, action.payload],
                isLoading: false
            }
            case POST_SMURF_FAILURE:
                return {
                    ...state, 
                    isLoading: false,
                    error: action.payload
                }
        default:
            return state
    }
}