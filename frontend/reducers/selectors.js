import {values} from 'lodash';

export const selectAllPokemon = (state) => (
  values(state.pokemon)
);

export const selectPokemonItem = (state, targetId) => {
  let items = state.pokemonDetail.items;
  for (var i = 0; i < items.length; i++) {
    let item = items[i];
    if (item.id == targetId) {
      return item;
    }
  }
  return {};
};

export const findLastId = (pokemon) => {
  return (Math.max.apply(null,Object.keys(pokemon))+1);
};
