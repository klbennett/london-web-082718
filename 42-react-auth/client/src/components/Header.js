import React from 'react'

import logo from '../logo.svg'

const Header = props =>
  <header className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <h1 className='App-title'>
      {
        props.username ?
          `Welcome back, ${props.username}!` :
          'Welcome to React.'
      }
      <br />
      {
        props.username &&
          <button onClick={props.signout}>SIGN OUT</button>
      }
    </h1>
  </header>

export default Header
