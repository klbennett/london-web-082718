import React from 'react'
import Hog from './Hog'

const HogsList = (props) => {
  return(<div className="ui grid container">
  {props.hogs.map(hog => <Hog hidePig={props.hidePig} hog={hog}/>)}
</div>)
}

export default HogsList
