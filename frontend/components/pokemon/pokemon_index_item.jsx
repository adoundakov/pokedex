import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = ({pokemon, router}) => {

  const handleClick = url => e => {
    // dispatch()
    return router.push(url);
  };

  return (
  <li key={pokemon.id}
      className="pokemon-index-item"
      onClick={handleClick(`/pokemon/${pokemon.id}`)}>
    <span>{pokemon.name}</span>
    <img src={pokemon.image_url} />
  </li>
);
};

export default withRouter(PokemonIndexItem);
