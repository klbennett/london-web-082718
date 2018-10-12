class Pokemon {
  constructor (pokemonData) {
    this.name = pokemonData.name
    this.url = pokemonData.url
    this.id = pokemonData.id
  }

  render () {
    const pokeItem = document.createElement('li')
    pokeItem.innerHTML = `
      <h2>${this.name}</h2>
      <img src='${this.url}' />
    `
    this.pokeEl = this.pokeEl || pokeItem
    return this.pokeEl
  }

  remove () {
    this.pokeEl.remove()
  }
}
