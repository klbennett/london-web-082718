import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

import Header from './components/Header'
import SignInForm from './components/SignInForm'
import Inventory from './components/Inventory'

import './App.css'

class App extends Component {

  state = {
    username: null
  }

  signin = (username) => {
    localStorage.setItem('username', username)
    this.setState({ username })
    this.props.history.push('/inventory')
  }

  signout = () => {
    localStorage.removeItem('username')
    this.setState({ username: null })
    this.props.history.push('/signin')
  }

  componentDidMount() {
    const username = localStorage.getItem('username')
    if (username) {
      this.signin(username)
      this.props.history.push('/inventory')
    } else {
      this.props.history.push('/signin')
    }
  }

  render() {
    const { username } = this.state
    const { signin, signout } = this
    return (
      <div className="App">
        <Header username={username} signout={signout} />
        <Route path='/signin' render={props => <SignInForm {...props} signin={signin} />} />
        <Route path='/inventory' component={Inventory} />
      </div>
    )
  }
}

export default withRouter(App)
