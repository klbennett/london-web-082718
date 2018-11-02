import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsList from './HogsList'
import Form from './Form'

import hogs from '../porkers_data';

class App extends Component {

  state = {
    name: false,
    weight: false,
    greased: false,
    hogs: hogs,
    hiddenPigs: []
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    })
  }

  hidePig = (pig) => {
    this.setState({
      hiddenPigs : [...this.state.hiddenPigs, pig]
    })
  }

  filterPigs = () => {
    let hogs = this.state.hogs.filter(hog => !this.state.hiddenPigs.includes(hog))
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    this.state.weight ? hogs = hogs.sort((a,b) => a[weight] - b[weight]) : null
    this.state.name ? hogs = hogs.sort((a,b) => a.name.localeCompare(b.name)) : null
    this.state.greased ? hogs = hogs.filter(hog => hog.greased): null
    return hogs
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <Form handleChange={this.handleChange}/>
          <button onClick={() => this.setState({hiddenPigs: []})}>Reveal all hogs</button>
          <HogsList hidePig={this.hidePig} hogs={this.filterPigs()}/>
      </div>
    )
  }
}

export default App;
