import React from 'react';
import {withRouter} from 'react-router';

const Item = ({item, router}) => {
  const handleClick = url => e => (router.push(url));

  return (
  <li onClick={handleClick(`/pokemon/${item.pokemon_id}/toy/${item.id}`)}>
    <img src={item.image_url} alt={item.name}/>
  </li>
);
};

export default withRouter(Item);
