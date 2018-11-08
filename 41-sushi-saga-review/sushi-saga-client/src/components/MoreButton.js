import React from 'react'

const MoreButton = ({incrementCounter}) => {
    return <button onClick={() => {incrementCounter()}}>
            More sushi!
          </button>
}

export default MoreButton
