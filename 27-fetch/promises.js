// Promises, promises...

// fetch(url: String, ?options: Object)
// fetch takes 2 parameters
// - a url in String format
// - options in Object format (optional)

// GET all pokemons
const getPokemons = () =>
  // fetch makes a GET request by default
  // so no options needed here
  fetch('http://localhost:3000/pokemons')
    .then(resp => resp.json())

// GET a single pokemon by id
const getPokemon = id =>
  fetch(`http://localhost:3000/pokemons/${id}`)
    .then(resp => resp.json())

// POST a new pokemon to the server
const createPokemon = pokemon =>
  fetch('http://localhost:3000/pokemons', {
    // This time, we need to specify the method
    // because we don't want a GET, but a POST
    method: 'POST',
    // We tell the server what kind of data we'll be sending
    headers: { 'Content-Type': 'application/json' },
    // We pass that data via a String in the *body* of the request
    // JSON.stringify() takes some JavaScript
    // and turns it into a JSON string
    body: JSON.stringify(pokemon)
  }).then(resp => resp.json())

// DELETE a pokemon from the server by id
const deletePokemon = id =>
  fetch(`http://localhost:3000/pokemons/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }).then(resp => resp.json())

// PATCH an existing pokemon
const updatePokemon = pokemon =>
  fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pokemon)
  }).then(resp => resp.json())
