import React from 'react'

import Item from './Item'

class Inventory extends React.Component {
  state = {
    items: [
      {
        id: 1,
        name: 'Cloak',
        description: "Just add a dagger and you're practically a rogue!"
      },
      {
        id: 2,
        name: 'Dagger',
        description: "You've done it!"
      }
    ]
  }

  style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap'
  }

  render () {
    const { items } = this.state

    return (
      <div style={this.style} className='user-list'>
        <h3>Here's your inventory:</h3>
        { items.length === 0 && <p>Sorry, you don't have any items.</p>}
        {
          items.map(item =>
            <Item key={item.id} item={item} />
          )
        }
      </div>
    )
  }
}

export default Inventory
