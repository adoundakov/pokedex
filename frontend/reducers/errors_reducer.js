import {RECEIVE_POKEMON_ERRORS} from '../actions/pokemon_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POKEMON_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
};

export default ErrorsReducer;
