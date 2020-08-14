import axios from 'axios' 
import { FETCH_SMURFS_SUCCESS } from './smurfActions'

export const POST_SMURF_START = 'POST_SMURF_START'
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE'

export const addSmurf = (newSmurf) => (dispatch) => {
    dispatch({ type: POST_SMURF_START })
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log(res)   
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: POST_SMURF_FAILURE, payload: err})
        })
}
