import React from 'react'


const SmurfCard = props => {
    const { smurf } = props
    // console.log(smurf)

    return (
        <div>
            
            <h4>{smurf.name}</h4>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
        </div>
    )
}

export default SmurfCard