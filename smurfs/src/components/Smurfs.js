import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../store/actions/smurfActions'
import SmurfCard from './SmurfCard'

const Smurfs = props => {
    useEffect(() => {
        props.fetchSmurfs()
    }, [])
    console.log(props)

    return (
        <section>
            <h2>Smurf List Test</h2>
            {props.isLoading ? <h4>Fetching Smurfs...</h4> : null}
            {props.error ? <h4>oops something went wrong... {props.error}</h4> : null}
            {props.smurfs.map(smurf => (
                <SmurfCard key={smurf.id} smurfData={smurf} />
            ))}
        </section>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        smurfs: state.smurfReducer.smurfs,
        isLoading: state.smurfReducer.isLoading,
        error: state.smurfReducer.error

    }
}
export default connect(mapStateToProps, { fetchSmurfs })(Smurfs)