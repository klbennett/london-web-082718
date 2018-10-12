class PokemonList {

  static addPokemon (pokemon) {
    this.pokemons.push(new Pokemon(pokemon))
    this.updateList()
  }

  static addPokemons (pokemons) {
    pokemons.forEach(pokemon => this.addPokemon(pokemon))
  }

  static removePokemon (pokemonToRemove) {
    this.pokemons = this.pokemons.filter(pokemon => pokemon !== pokemonToRemove)
    pokemonToRemove.remove()
  }

  static updateList () {
    this.pokemons.forEach(
      pokemon => this.listEl.appendChild(pokemon.render())
    )
  }
}

PokemonList.pokemons = []
PokemonList.listEl = document.querySelector('#pokemon-list')
