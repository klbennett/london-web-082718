import PokemonModel from './PokemonModel.js'
import PokemonView from './PokemonView.js'
import PokemonController from './PokemonController.js'
import API from './API.js'

const pokeModel = new PokemonModel()
const pokeView = new PokemonView()
const pokeController = new PokemonController(pokeModel, pokeView)

API.getPokemons()
  .then(pokemons => pokeController.addPokemons(pokemons))
