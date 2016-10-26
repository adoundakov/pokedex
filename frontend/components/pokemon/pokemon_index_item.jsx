import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = ({pokemon, router}) => {

  const handleClick = url => e => (router.push(url));

  return (
    <li className="pokemon-index-item"
        key={pokemon.id}
        onClick={handleClick(`/pokemon/${pokemon.id}`)}>
      <span>{pokemon.id}</span>
      <img src={pokemon.image_url} />
      <span>{pokemon.name}</span>
    </li>
  );
};

export default withRouter(PokemonIndexItem);
