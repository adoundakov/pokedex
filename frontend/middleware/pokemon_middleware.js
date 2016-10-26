import {fetchAllPokemon} from '../util/api_util';
import {REQUEST_ALL_POKEMON,
        receiveAllPokemon} from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const fetchAllSuccess = data => dispatch(receiveAllPokemon(data));
  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(fetchAllSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
