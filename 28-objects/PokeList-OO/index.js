const pokeForm = document.querySelector('#pokemon-form')
const pokeNameInput = document.querySelector('#pokemon-name')
const pokeUrlInput = document.querySelector('#pokemon-url')

API.getPokemons()
  .then(pokemons => PokemonList.addPokemons(pokemons))

pokeForm.addEventListener('submit', event => {
  event.preventDefault()

  const pokemon = {
    name: pokeNameInput.value,
    url: pokeUrlInput.value
  }

  API.createPokemon(pokemon)
    .then(pokemon => PokemonList.addPokemon(pokemon))
})
