import React from 'react'

const Navbar = props =>
  <div>
    <div className='navbar'>
      <h1>{props.title}</h1>
    </div>
    <div>
      <h2>{props.subtitle}</h2>
    </div>
  </div>

export default Navbar
