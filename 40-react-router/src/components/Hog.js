import React from 'react'
import HogDetail from './HogDetail'
import {Link} from 'react-router-dom'

class Hog extends React.Component {

render() {
  let imgSrc = require(`../hog-imgs/${this.props.hog.name.split(" ").join("_").toLowerCase()}.jpg`)

  return (
    <div className="ui eight wide column ui card">
      <Link to={`/hogs/${this.props.hog.name.split(" ").join("-").toLowerCase()}`}><h4>{this.props.hog.name}</h4></Link>
      <img src={imgSrc}/>
      <button className="ui button yellow"
        onClick={this.props.handleChange}>Hide/Reveal
      </button>
    </div>
  )
 }
}


export default Hog
