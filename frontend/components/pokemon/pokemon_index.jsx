import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = ({loading, pokemon, children}) => {
  let spinner = (
    <div className="drawing" id="loading">
      <div className="loading-dot"></div>
    </div>
  );
  return (
    <section className="pokedex">
      {loading ? spinner : ''}
      <ul>
          {pokemon.map(poke => (
              <PokemonIndexItem key={poke.id} pokemon={poke} />
          ))}
      </ul>
          {children}
    </section>
  );
};

export default PokemonIndex;
