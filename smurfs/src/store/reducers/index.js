// REDUCER INDEX

import { combineReducers } from 'redux'
import { smurfReducer } from './smurfReducers'
import { formReducer } from './formReducers'

export const rootReducer = combineReducers({
    smurfReducer,
    formReducer
})