const pokeModel = new PokemonModel()
const pokeView = new PokemonView()
const pokeController = new PokemonController(pokeModel, pokeView)

API.getPokemons()
  .then(pokemons => pokeController.addPokemons(pokemons))
