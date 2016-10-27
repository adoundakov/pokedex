import React from 'react';
import ItemDetail from '../items/item_detail';
import Item from '../items/item';

const PokemonDetail = ({ pokemonDetail, children }) => {
	let items = pokemonDetail.items;
	console.log(pokemonDetail);
	return (
			<section className="pokemon-detail">
				<ul>
					<img src={pokemonDetail.image_url} alt={pokemonDetail.name}/>
						<li><h2>{pokemonDetail.name}</h2></li>
						<li>Type: {pokemonDetail.poke_type}</li>
						<li>Attack: {pokemonDetail.attack}</li>
						<li>Defense: {pokemonDetail.defense}</li>
						<li>Moves: {pokemonDetail.moves.join(', ')}</li>
				</ul>
				<section className="toys">
					<h3>Items</h3>
					<ul className="toy-list">
						{items.map((item) => <Item key={item.name} pokemonId={pokemonDetail.id} item={item}/>)}
					</ul>
				</section>
				{children}
			</section>
		);
};

export default PokemonDetail;
