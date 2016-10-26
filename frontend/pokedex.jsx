import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

//for testing
import { RECEIVE_ALL_POKEMON,
         receiveAllPokemon,
         requestAllPokemon } from './actions/pokemon_actions';
import {fetchAllPokemon} from './util/api_util';
import {selectAllPokemon} from './reducers/selectors';
window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;

//

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();

  //for testing
  window.store = store;
  window.state = store.getState;
  //

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to the pokedex</h1>, root);
});
