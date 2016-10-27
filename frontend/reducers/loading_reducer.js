import * as Actions from '../actions/pokemon_actions';

const LoadingReducer = (state = true, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Actions.RECEIVE_A_POKEMON:
      return false;
    case Actions.RECEIVE_NEW_POKEMON:
      return false;
    case Actions.RECEIVE_ALL_POKEMON:
      return false;
    case Actions.RECEIVE_POKEMON_ERRORS:
      return false;
    case Actions.REQUEST_ALL_POKEMON:
      return true;
    case Actions.REQUEST_A_POKEMON:
      return true;
    case Actions.CREATE_NEW_POKEMON:
      return true;
    default:
      return state;
  }
};

export default LoadingReducer;
