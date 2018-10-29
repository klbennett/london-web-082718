import React from 'react'

const Painting = props =>
  <div className='painting'>
    <img src={props.painting.image} alt='' />
    <h3>{props.painting.title}</h3>
    <p>Date: {props.painting.date}</p>
    <div>
      <h3>Artist details:</h3>
      <p>Artist name: {props.painting.artist.name}</p>
      <p>{props.painting.artist.birthday} - {props.painting.artist.deathday}</p>
    </div>
  </div>

export default Painting
