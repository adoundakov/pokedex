import React from 'react';

const PokemonIndexItem = ({pokemon, handleClick}) => {
  return (
    <li className="pokemon-index-item"
        key={pokemon.id}
        onClick={handleClick(pokemon.id)}>
      <span>{pokemon.id}</span>
      <img src={pokemon.image_url} />
      <span>{pokemon.name}</span>
    </li>
  );
};

export default PokemonIndexItem;
