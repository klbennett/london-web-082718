import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    counter: 0,
    eaten: [],
    budget: 100
  }

  eatSushi = (sushi) => {
    if(this.state.budget > sushi.price && !this.state.eaten.includes(sushi)){
      this.setState({
        eaten: [...this.state.eaten, sushi],
        budget: this.state.budget - sushi.price
      })
    }
  }

  incrementCounter = () => {
    if (this.state.counter < this.state.sushis.length - 5){
      this.setState({counter: this.state.counter + 4})
    }
    else{
      this.setState({counter: 0})
    }
  }

  componentDidMount () {
    fetch(API)
    .then(resp => resp.json())
    .then(resp => this.setState({sushis: resp}))
  }

  nextFour = () => {
    return this.state.sushis.slice(this.state.counter, this.state.counter + 4)
  }


  render() {
    return (
      <div className="app">
        <SushiContainer
          eaten={this.state.eaten}
          eatSushi={this.eatSushi}
          nextFour={this.nextFour}
          incrementCounter={this.incrementCounter}
          sushis={this.state.sushis}/>
        <Table budget={this.state.budget} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
