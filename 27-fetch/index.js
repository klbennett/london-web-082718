// get all the elements we'll need from the page
const pokeList = document.querySelector('#pokemon-list')
const pokeForm = document.querySelector('#pokemon-form')
const pokeNameInput = document.querySelector('#pokemon-name')
const pokeUrlInput = document.querySelector('#pokemon-url')

// put a single pokemon on the page
// this function takes a single object
const renderPokemon = pokemon => {
  const pokeItem = document.createElement('li')
  pokeItem.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src='${pokemon.url}' />
  `
  pokeList.append(pokeItem)
}

// leverage the function we just wrote to add multiple pokemon to the page
// this function takes an array of pokemon objects
const renderPokemons = pokemons =>
  pokemons.forEach(renderPokemon)

// call the getPokemons() function we wrote in promises.js
// getPokemons returns a Promise with an array of pokemon objects
// we can unwrap the Promise with `.then()` and use the array
getPokemons()
  // this does the same as: .then(pokemons => renderPokemons(pokemons))
  .then(renderPokemons)

// the <form> on the page triggers a 'submit' event
pokeForm.addEventListener('submit', event => {
  // let's catch it and prevent it from refreshing the page
  event.preventDefault()

  // now we want to create a new pokemon
  // both on the server and on the screen
  // we need a pokemon object for our functions to work
  const pokemon = {
    name: pokeNameInput.value,
    url: pokeUrlInput.value
  }

  // let's post that to the server using the createPokemon()
  // function we wrote in promises.js
  createPokemon(pokemon)
    // when the server is done, we get the new pokemon
    // and we can call renderPokemon() on it to render it on the page
    .then(renderPokemon)
})
