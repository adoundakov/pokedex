import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = ({pokemon, children}) => {
  return (
    <section className="pokedex">
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
