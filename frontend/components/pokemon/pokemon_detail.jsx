import React from 'react';
import ItemDetail from '../items/item_detail';
import Item from '../items/item';
import {withRouter} from 'react-router';

class PokemonDetail extends React.Component {
	constructor(props) {
		super(props);
		this.router = props.router;
		this.requestAPokemon = props.requestAPokemon;
	}

	componentDidMount() {
		if (this.props.pokemonDetail.id === undefined) {
			this.requestAPokemon(this.router.params.pokemonId);
		}
	}

	render() {
		let items = this.props.pokemonDetail.items;
		return (
			<section className="pokemon-detail">
				<ul>
					<img src={this.props.pokemonDetail.image_url} alt={this.props.pokemonDetail.name}/>
						<li><h2>{this.props.pokemonDetail.name}</h2></li>
						<li>Type: {this.props.pokemonDetail.poke_type}</li>
						<li>Attack: {this.props.pokemonDetail.attack}</li>
						<li>Defense: {this.props.pokemonDetail.defense}</li>
						<li>Moves: {this.props.pokemonDetail.moves.join(', ')}</li>
				</ul>
				<section className="toys">
					<h3>Items</h3>
					<ul className="toy-list">
						{items.map((item) => <Item key={item.name} pokemonId={this.props.pokemonDetail.id} item={item}/>)}
					</ul>
				</section>
				{this.props.children}
			</section>
		);
	}
}

export default withRouter(PokemonDetail);
