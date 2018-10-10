const pokeList = document.querySelector('#pokemon-list')
const pokeForm = document.querySelector('#pokemon-form')
const pokeNameInput = document.querySelector('#pokemon-name')
const pokeUrlInput = document.querySelector('#pokemon-url')

const renderPokemon = pokemon => {
  const pokeItem = document.createElement('li')
  pokeItem.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src='${pokemon.url}' />
  `
  pokeList.append(pokeItem)
}

const renderPokemons = pokemons =>
  pokemons.forEach(renderPokemon)

getPokemons()
  .then(renderPokemons)

pokeForm.addEventListener('submit', event => {
  event.preventDefault()
  const pokemon = {
    name: pokeNameInput.value,
    url: pokeUrlInput.value
  }
  createPokemon(pokemon)
    .then(renderPokemon)
})
