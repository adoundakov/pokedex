import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TESTING -----------------------------------------------------------
import { RECEIVE_ALL_POKEMON,
         receiveAllPokemon,
         requestAllPokemon,
         requestAPokemon} from './actions/pokemon_actions';
import {fetchAllPokemon, fetchAPokemon} from './util/api_util';
import {selectAllPokemon} from './reducers/selectors';
import PokemonDetail from './components/pokemon/pokemon_detail';
window.fetchAllPokemon = fetchAllPokemon;
window.fetchAPokemon = fetchAPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.requestAPokemon = requestAPokemon;
window.selectAllPokemon = selectAllPokemon;
// TESTING -----------------------------------------------------------


document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();

  // TESTING -----------------------------------------------------------
  window.store = store;
  window.state = store.getState;
  // TESTING -----------------------------------------------------------

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
