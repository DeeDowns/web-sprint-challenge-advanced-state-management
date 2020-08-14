import React from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../store/actions/smurfActions'
import SmurfCard from './SmurfCard'

const Smurfs = props => {
   
    const { smurfData } = props
    // console.log(smurfData)

    return (
        <section>
            <h2>Smurf List Test</h2>
            {smurfData.isLoading ? <h4>Fetching Smurfs...</h4> : null}
            {smurfData.error ? <h4>oops something went wrong... {smurfData.error}</h4> : null}
            {smurfData.smurfs.map(smurf => (
                <SmurfCard key={smurf.id} smurf={smurf} />
            ))}
        </section>
    )
}

export default Smurfs