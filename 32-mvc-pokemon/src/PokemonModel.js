class PokemonModel {
  constructor (pokemons = []) {
    this.pokemons = pokemons
    this.filter = ''
    this.bindMethods()
  }

  addPokemon (pokemon) {
    this.pokemons.push(pokemon)
  }

  addPokemons (pokemons) {
    this.pokemons = [...this.pokemons, ...pokemons]
  }

  updateFilter (newFilter) {
    this.filter = newFilter
  }

  clearFilter () {
    this.filter = ''
  }

  bindMethods () {
    this.addPokemon = this.addPokemon.bind(this)
    this.addPokemons = this.addPokemons.bind(this)
    this.updateFilter = this.updateFilter.bind(this)
    this.clearFilter = this.clearFilter.bind(this)
  }
}

export default PokemonModel
