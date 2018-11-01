import React from 'react'

class Painting extends React.Component {

  componentWillUnmount() {
    console.log('WHY DID YOU DO THIS TO ME!?!?!?')
    console.log(`I am ${this.props.painting.title} by the way...`)
  }

  render () {
    const { removePainting, selectPainting, painting } = this.props
    return <div className='painting'>
      <button onClick={() => removePainting(painting.id)} >X</button>
      <button onClick={() => selectPainting(painting)} >SELECT PAINTING</button>
      <img src={painting.image} alt='' />
      <h3>{painting.title}</h3>
      <p>Date: {painting.date}</p>
      <div>
        <h3>Artist details:</h3>
        <p>Artist name: {painting.artist.name}</p>
        <p>{painting.artist.birthday} - {painting.artist.deathday}</p>
      </div>
    </div>
  }
}

export default Painting
