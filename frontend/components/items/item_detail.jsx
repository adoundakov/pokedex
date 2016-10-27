import React from 'react';

const ItemDetail = ({item}) => {
	return (
		<section className="item-detail">
      <ul>
          <li><h2>{item.name}</h2></li>
          <li>Happiness: {item.happiness}</li>
          <li>Price: {item.price}</li>
      </ul>
		</section>
		);
};

export default ItemDetail;
