import { POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAILURE } from '../actions/formActions'

const initialState = {
    smurfs: [
        {
            name: 'Brainey',
            age: 200,
            height: '5cm',
            id: 0
        }

    ]
}

export const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_SMURF_START:
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    {
                        name: action.payload.name,
                        age: action.payload.age,
                        height: action.payload.height,
                        id: new Date()
                    }
                ]
            }
        default:
            return state
    }
}