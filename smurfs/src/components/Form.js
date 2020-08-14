import React, { useEffect } from 'react' 
import { connect } from 'react-redux'

const Form = props => {
    console.log('form props', props) 

    return (
        <form>
            <label>Name
                <input
                    // value={}
                    // onChange={}
                    name='name'
                    type='text'
                    id='name'
                />
            </label>

            <label>Age
                <input 
                    // value={}
                    // onChange={}
                    name='age'
                    type='text'
                    id='age'
                />
            </label>

            <label>Height (cm)
                <input
                    // value={}
                    // onChange={}
                    name='height'
                    type='text'
                    id='height'
                 />
            </label>

            <button>Submit</button>
        </form>
    )
}

export default Form