import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }

  adoptPet = id => {
    const pets = [...this.state.pets]
    const foundPet = pets.find(pet => pet.id === id)
    const foundPetCopy = JSON.parse(JSON.stringify(foundPet))
    foundPetCopy.isAdopted = true
    // pets.splice(pets.indexOf(foundPet), 1, foundPetCopy)
    pets[pets.indexOf(foundPet)] = foundPetCopy
    this.setState({ pets })
  }

  setPets = pets => {
    this.setState({ pets })
  }

  fetchPets = () => {
    const filter = this.state.filters.type
    const url = filter === 'all' ?
      `/api/pets` :
      `/api/pets?type=${filter}`
    fetch(url)
      .then(resp => resp.json())
      .then(pets => this.setPets(pets))
  }

  updateFilter = event => {
    this.setState({ filters: { type: event.target.value } })
  }

  render() {
    const { updateFilter, fetchPets, adoptPet } = this
    const { pets } = this.state
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters updateFilter={updateFilter} fetchPets={fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={pets} adoptPet={adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
