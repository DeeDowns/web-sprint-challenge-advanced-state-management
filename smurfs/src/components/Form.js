import React, { useState } from 'react' 
import { connect } from 'react-redux'
import { addSmurf } from '../store/actions/formActions'



const Form = props => {
    console.log('form props', props) 
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })
     
    const onChange = (event) => {
        setSmurf({
            ...smurf,
            [event.target.name]: event.target.value
        })
    }

   const onSubmit = event => {
        event.preventDefault()
        props.addSmurf(smurf)
       setSmurf({
        name: '',
        age: '',
        height: ''
       })

    }

    console.log(smurf)

    return (
        <form onSubmit={onSubmit}>
            <label>Name
                <input
                    value={smurf.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    id='name'
                />
            </label>

            <label>Age
                <input 
                    value={smurf.age}
                    onChange={onChange}
                    name='age'
                    type='text'
                    id='age'
                />
            </label>

            <label>Height (cm)
                <input
                    value={smurf.height}
                    onChange={onChange}
                    name='height'
                    type='text'
                    id='height'
                 />
            </label>

            <button type='submit'>Submit</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfReducer.smurfs,
        isLoading: state.smurfReducer.isLoading,
        error: state.smurfReducer.error
    }
  }

export default connect(mapStateToProps, { addSmurf })(Form)