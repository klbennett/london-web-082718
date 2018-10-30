import React from 'react'

import Navbar from './Navbar'
import PaintingList from './PaintingList'
import PaintingDetails from './PaintingDetails'

import paintingData from './paintings.js'

class App extends React.Component {
  state = {
    paintings: paintingData,
    filter: '',
    selectedPainting: null
  }

  selectPainting = painting => {
    this.setState({selectedPainting: painting})
  }

  deselectPainting = () => {
    this.setState({selectedPainting: null})
  }

  updateFilter = newFilter => {
    this.setState({ filter: newFilter })
  }

  removePainting = (id) => {
    const newPaintings = this.state.paintings.filter(painting => painting.id !== id)
    // this.state.painting = newPaintings  // DON'T
    this.setState({ paintings: newPaintings })
  }

  filterPainting = () => {
    const paintings = this.state.paintings.filter(painting =>
        painting.title.toLowerCase().includes(this.state.filter.toLowerCase())
    )
    return paintings
  }

  render() {
    return (
      <div className="App">
        {/* <button onClick={this.removePainting}>REMOVE PAINTING</button> */}
        <Navbar
          title="Welcome to my app!!"
          subtitle="Check out the paintings below!"
        />
        {
          !this.state.selectedPainting &&
            <input
              onKeyUp={event => this.updateFilter(event.target.value)}
              placeholder='filter by name'
            />
        }
        {
          this.state.selectedPainting ?
            <PaintingDetails
              painting={this.state.selectedPainting}
              deselectPainting={this.deselectPainting}
            /> :
            <PaintingList
              selectPainting={this.selectPainting}
              removePainting={this.removePainting}
              paintings={this.filterPainting()}
            />
        }
      </div>
    )
  }
}

export default App
