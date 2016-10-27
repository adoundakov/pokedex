import {fetchAllPokemon, fetchAPokemon, createPokemon} from '../util/api_util';
import {REQUEST_ALL_POKEMON,
        receiveAllPokemon,
        REQUEST_A_POKEMON,
        receiveAPokemon,
        CREATE_NEW_POKEMON,
        receieveNewPokemon} from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const fetchAllSuccess = data => dispatch(receiveAllPokemon(data));
  const fetchASuccess = data => dispatch(receiveAPokemon(data));
  const createNewSuccess = data => dispatch(receieveNewPokemon(data));
  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(fetchAllSuccess);
      break;
    case REQUEST_A_POKEMON:
      fetchAPokemon(action.id, fetchASuccess);
      break;
    case CREATE_NEW_POKEMON:
      createPokemon(action.pokemon, createNewSuccess);
      break;
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
