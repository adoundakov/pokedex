import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import { Router, Route, hashHistory } from 'react-router';
import { requestAllPokemon,requestAPokemon } from '../actions/pokemon_actions';

const Root = (props) => {
  console.log(props);
  const store = props.store;

  const requestAllOnEnter = () => {
    store.dispatch(requestAllPokemon());
  };

  const requestOneOnEnter = () => {
    // console.log(store.getState());
    store.dispatch(requestAPokemon(store.params.id));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route
          path="/"
          component={PokemonIndexContainer}
          onEnter={requestAllOnEnter}>
            <Route
              path="/pokemon/:pokemonId"
              component={PokemonDetailContainer} />
        </Route>
      </Router>
    </Provider>
  );
};
export default Root;
