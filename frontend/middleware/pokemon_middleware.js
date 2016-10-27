import {fetchAllPokemon, fetchAPokemon, createNewPokemon} from '../util/api_util';
import {REQUEST_ALL_POKEMON,
        receiveAllPokemon,
        REQUEST_A_POKEMON,
        receiveAPokemon,
        CREATE_NEW_POKEMON,
        receiveNewPokemon,
        receivePokemonErrors} from '../actions/pokemon_actions';
import {hashHistory} from 'react-router';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const fetchAllSuccess = data => dispatch(receiveAllPokemon(data));
  const fetchASuccess = data => dispatch(receiveAPokemon(data));
  const createNewSuccess = data => {
    dispatch(receiveNewPokemon(data));
    hashHistory.push(`/pokemon/${data.id}`);
  };
  const createNewError = error => dispatch(receivePokemonErrors(error));

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(fetchAllSuccess);
      break;
    case REQUEST_A_POKEMON:
      fetchAPokemon(action.id, fetchASuccess);
      break;
    case CREATE_NEW_POKEMON:
      createNewPokemon(action.pokemon, createNewSuccess, createNewError);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
