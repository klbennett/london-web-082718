class Pokemon {
  constructor (pokemonData) {
    this.name = pokemonData.name
    this.url = pokemonData.url
    this.id = pokemonData.id
  }

  render () {
    if (this.pokeEl) return this.pokeEl
    
    const pokeItem = document.createElement('li')
    pokeItem.innerHTML = `
      <h2>${this.name}</h2>
      <img src='${this.url}' />
    `
    this.pokeEl = pokeItem

    return this.pokeEl
  }

  updateName (newName) {
    this.pokeEl.querySelector('h2').innerText = newName
  }

  remove () {
    this.pokeEl.remove()
  }
}
