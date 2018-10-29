import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './style.css'

ReactDOM.render(<App name="Nicolas" func={() => console.log('You called me!')} num={1} arr={[1,3,4]}/>, document.getElementById('root'))

