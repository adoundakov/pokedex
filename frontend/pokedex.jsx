import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

//for testing
import { RECEIVE_ALL_POKEMON, receiveAllPokemon } from './actions/pokemon_actions';
import {fetchAllPokemon} from './util/api_util';

window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;

//

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();

  //for testing
  window.store = store;
  //

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to the pokedex</h1>, root);
});
