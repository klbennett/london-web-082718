class API {
  static getPokemons () {
    return fetch(this.pokemonsUrl)
      .then(resp => resp.json())
  }

  static getPokemon (id) {
    return fetch(`${this.pokemonsUrl}/${id}`)
      .then(resp => resp.json())
  }

  static createPokemon (pokemon) {
    return fetch(this.pokemonsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pokemon)
    }).then(resp => resp.json())
  }

  static deletePokemon (id) {
    return fetch(`${this.pokemonsUrl}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }).then(resp => resp.json())
  }

  static updatePokemon (pokemon) {
    return fetch(`${this.pokemonsUrl}/${pokemon.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pokemon)
    }).then(resp => resp.json())
  }
}

API.baseUrl = 'http://localhost:3000'
API.pokemonsUrl = API.baseUrl + '/pokemons'
