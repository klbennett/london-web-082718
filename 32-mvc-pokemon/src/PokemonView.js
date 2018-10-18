class PokemonView {
  constructor () {
    this.pokeInput = document.querySelector('#pokemon-search-input')
    this.pokeList = document.querySelector('#pokemon-container')
    this.bindMethods()
  }

  addPokemon (pokemon) {
    const pokeItem = document.createElement('div')
    pokeItem.classList.add('pokemon-container')

    pokeItem.innerHTML = `
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img src="${pokemon.sprites.front}">
          </div>
        </div>
      </div>
    `
    const imgEl = pokeItem.querySelector('img')
    pokeItem.addEventListener('click', () => {
      imgEl.src = imgEl.src === pokemon.sprites.back
        ? pokemon.sprites.front
        : pokemon.sprites.back
    })

    this.pokeList.appendChild(pokeItem)
  }

  addPokemons (pokemons) {
    pokemons.forEach(this.addPokemon)
  }

  updateList (pokemons) {
    this.pokeList.innerHTML = ''
    this.renderPokemons(pokemons)
  }

  addFilterEvent (func) {
    this.pokeInput.addEventListener('keyup', func)
  }

  bindMethods () {
    this.addPokemon = this.addPokemon.bind(this)
    this.renderPokemons = this.addPokemons.bind(this)
    this.updateList = this.updateList.bind(this)
  }
}
