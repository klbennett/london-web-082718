class PokemonController {
  constructor (model, view) {
    this.model = model
    this.view = view
    this.bindMethods()
    this.addEventListeners()
  }

  addPokemon (pokemon) {
    this.model.addPokemon(pokemon)
    this.view.addPokemon(pokemon)
  }

  addPokemons (pokemons) {
    this.model.addPokemons(pokemons)
    this.view.addPokemons(pokemons)
    // pokemons.forEach(pokemon => this.addPokemon(pokemon))
  }

  getFilteredPokemons () {
    return this.model.pokemons.filter(pokemon => pokemon.name.includes(this.model.filter))
  }

  updateFilter (event) {
    const newFilter = event.target.value
    this.model.updateFilter(newFilter)
    const filteredPokemons = this.getFilteredPokemons()
    this.view.updateList(filteredPokemons)
  }

  addEventListeners () {
    this.view.addFilterEvent(this.updateFilter)
  }

  bindMethods () {
    this.addPokemon = this.addPokemon.bind(this)
    this.addPokemons = this.addPokemons.bind(this)
    this.getFilteredPokemons = this.getFilteredPokemons.bind(this)
    this.updateFilter = this.updateFilter.bind(this)
  }
}

export default PokemonController
