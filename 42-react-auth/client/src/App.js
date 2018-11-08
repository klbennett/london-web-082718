import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

import API from './API'
import Header from './components/Header'
import SignInForm from './components/SignInForm'
import Inventory from './components/Inventory'

import './App.css'

class App extends Component {

  state = {
    username: null
  }

  signin = (user) => {
    localStorage.setItem('token', user.token)
    this.setState({ username: user.username })
    this.props.history.push('/inventory')
  }

  signout = () => {
    localStorage.removeItem('token')
    this.setState({ username: null })
    this.props.history.push('/signin')
  }

  componentDidMount() {
    if (!localStorage.getItem('token')) return
    API.validate()
      .then(user => {
        this.signin(user)
        this.props.history.push('/inventory')
      })
      .catch(error => this.props.history.push('/signin'))
  }

  render() {
    const { username } = this.state
    const { signin, signout } = this
    return (
      <div className="App">
        <Header username={username} signout={signout} />
        <Route path='/signin' render={props => <SignInForm {...props} signin={signin} />} />
        <Route path='/inventory' render={props => <Inventory {...props} username={username} />} />
      </div>
    )
  }
}

export default withRouter(App)
