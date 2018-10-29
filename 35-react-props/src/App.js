import React from 'react'

import Navbar from './Navbar'
import PaintingList from './PaintingList'

import paintingData from './paintings.js'

const App = props => {
  console.log('App props:', props)
  console.log(paintingData)
  props.func()
  return <div className="App">
    <Navbar
      title="Welcome to my app!!"
      subtitle="Check out the paintings below!"
    />
    <PaintingList paintings={paintingData} />
  </div>
}

export default App
