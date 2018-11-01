import React from 'react'

const PaintingDetails = props =>
  <div>
    <button onClick={props.deselectPainting}>BACK</button>
    <img src={props.painting.image} alt='' />
    <h3>{props.painting.title}</h3>
    <p>Date: {props.painting.date}</p>
    <div>
      Painting dimensions: {props.painting.dimensions.width} x {props.painting.dimensions.height}
    </div>
    <div>
      <h3>Artist details:</h3>
      <p>Artist name: {props.painting.artist.name}</p>
      <p>Artist hometown: {props.painting.artist.hometown}</p>
      <p>{props.painting.artist.birthday} - {props.painting.artist.deathday}</p>
    </div>
  </div>

export default PaintingDetails
