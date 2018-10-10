// Promises, promises...

const getPokemons = () =>
  fetch('http://localhost:3000/pokemons')
    .then(resp => resp.json())

const getPokemon = id =>
  fetch(`http://localhost:3000/pokemons/${id}`)
    .then(resp => resp.json())

const createPokemon = pokemon =>
  fetch('http://localhost:3000/pokemons', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pokemon)
  }).then(resp => resp.json())

const deletePokemon = id =>
  fetch(`http://localhost:3000/pokemons/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }).then(resp => resp.json())

const updatePokemon = pokemon =>
  fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pokemon)
  }).then(resp => resp.json())
