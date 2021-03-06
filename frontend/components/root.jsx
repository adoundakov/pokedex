import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';
import PokemonForm from './pokemon/pokemon_form';
import ItemDetailContainer from './items/item_detail_container';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import { requestAllPokemon,requestAPokemon } from '../actions/pokemon_actions';

const Root = ({store}) => {
  // on enter hooks moved to componentDidMount lifecycle methods
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route
          path="/"
          component={PokemonIndexContainer}>
        <IndexRoute component={PokemonFormContainer}/>
            <Route
              path="/pokemon/:pokemonId"
              component={PokemonDetailContainer}>
              <Route path="toy/:itemId" component={ItemDetailContainer}/>
            </Route>
        </Route>
      </Router>
    </Provider>
  );
};
export default Root;
