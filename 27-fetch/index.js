// get all the elements we'll need from the page
const pokeNameInput = document.querySelector('#pokemon-name')
const pokeUrlInput = document.querySelector('#pokemon-url')
const pokeForm = document.querySelector('#pokemon-form')
const pokeList = document.querySelector('#pokemon-list')

// create a function to add a single pokemon to the list
const addPokemon = pokemon => {
  const pokeEl = document.createElement('li')
  pokeEl.innerHTML = `
    <li>
      <h2>${pokemon.name}</h2>
      <img src='${pokemon.url}' />
    </li>
  `
  pokeList.appendChild(pokeEl)
}

// leverage the function we've just created to add multiple pokemon now
const addPokemons = pokemons =>
  pokemons.forEach(pokemon => addPokemon(pokemon))

// get all the pokemon from the server and THEN add them to the page


// enable the <form> to add to pokemon to the page AND the database
pokeForm.addEventListener('submit', event => {
  event.preventDefault()
  console.log('submit was triggered!')

  const pokemon = {
    name: pokeNameInput.value,
    url: pokeUrlInput.value
  }

  console.log(pokemon)
  addPokemon(pokemon)

  pokeNameInput.value = ''
  pokeUrlInput.value = ''
})
