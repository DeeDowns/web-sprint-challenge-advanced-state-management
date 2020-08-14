import React from 'react'


const SmurfCard = props => {
    const { smurfData } = props
    console.log(smurfData)

    return (
        <div>
            <h3>Smurf Card Test</h3>
            <h4>{smurfData.name}</h4>
            <p>{smurfData.age}</p>
            <p>{smurfData.height}</p>
        </div>
    )
}

export default SmurfCard