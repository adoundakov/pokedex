import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ItemDetailContainer from './items/item_detail_container';
import { Router, Route, hashHistory } from 'react-router';
import { requestAllPokemon,requestAPokemon } from '../actions/pokemon_actions';

const Root = ({store}) => {
  const requestAllOnEnter = () => {
    store.dispatch(requestAllPokemon());
  };

  const requestOneOnEnter = nextState => {
    store.dispatch(requestAPokemon(nextState.params.pokemonId));
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
              component={PokemonDetailContainer}
              onEnter={requestOneOnEnter}>
              <Route path="toy/:itemId" component={ItemDetailContainer}/>
            </Route>
        </Route>
      </Router>
    </Provider>
  );
};
export default Root;
