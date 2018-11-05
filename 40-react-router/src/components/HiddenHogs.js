import React from 'react'
import Hog from './Hog'

const HogsList = (props) => {
  return(
    <div className="ui container">
      <h2 style={{padding:30}}>Hidden Hogs</h2>
      <div className="ui grid container">
        {props.hiddenPigs.map(hog => <Hog handleChange={() => props.handleChange(hog)} hog={hog}/>)}
      </div>
    </div>
  )
}

export default HogsList
