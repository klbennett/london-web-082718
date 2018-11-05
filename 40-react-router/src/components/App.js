import React, { Component } from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import About from './About'
import HogsList from './HogsList'
import HiddenHogs from './HiddenHogs'
import HogContainer from './HogContainer'

class App extends Component {

  state = {
    hogs: [],
    hiddenPigs: []
  }

  componentDidMount() {
    fetch("http://localhost:3005/hogs")
    .then(resp => resp.json())
    .then(hogs => this.setState({hogs: hogs}))
  }

  hidePig = (pig) => {
    this.setState({
      hiddenPigs : [...this.state.hiddenPigs, pig]
    })
  }

  revealPig = (pig) => {
    this.setState({
      hiddenPigs : this.state.hiddenPigs.filter(hog => hog != pig)
    })
  }

  render() {
    console.log("HOGS STATE", this.state.hogs);
    return (
      <div className="App">
          <Nav/>
          <button className="ui button blue" onClick={() => this.setState({hiddenPigs: []})}>Reveal all hogs</button>
          <Switch>
            <Route path="/hogs/hidden-hogs" render={() => {
              return <HiddenHogs handleChange={this.revealPig} hiddenPigs={this.state.hiddenPigs}/>
            }}/>
              <Route path="/hogs" render={() => {
              return <HogContainer handleChange={this.hidePig} hogs={this.state.hogs.filter(hog => !this.state.hiddenPigs.includes(hog))}/>
            } }/>
            <Route exact path="/" component={About}/>
            <Route path="/" render={() => <div>404</div>}/>

          </Switch>
      </div>
    )
  }
}

export default App;
