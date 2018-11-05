import React, { Component } from 'react';
import Form from './Form'
import Hog from './Hog'

class HogsList extends Component {

  state = {
    name: false,
    weight: false,
    greased: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    })
  }


  filterPigs = () => {
    let hogs = [...this.props.hogs]
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    this.state.weight ? hogs = hogs.sort((a,b) => a[weight] - b[weight]) : null
    this.state.name ? hogs = hogs.sort((a,b) => a.name.localeCompare(b.name)) : null
    this.state.greased ? hogs = hogs.filter(hog => hog.greased): null
    return hogs
  }

  render() {
    return(
      <div>
        <Form handleChange={this.handleChange}/>
        <div className="ui grid container">
          {this.filterPigs().map(hog => <Hog handleChange={() => this.props.handleChange(hog)} hog={hog}/>)}
        </div>
    </div>)
  }
}

export default HogsList;
