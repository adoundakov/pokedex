import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import {withRouter, Link} from 'react-router';
import {requestAPokemon} from '../../actions/pokemon_actions';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    this.requestAllPokemon = props.requestAllPokemon.bind(this);
    this.requestAPokemon = props.requestAPokemon.bind(this);
    this.loading = props.loading;
    this.pokemon = props.pokemon;
    this.children = props.children;
    this.router = props.router;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.requestAllPokemon();
  }

  handleClick (id) {
    if (this.router.params.pokemonId != id) {
      return e => {
        this.requestAPokemon(id);
        this.router.push(`/pokemon/${id}`);
      };
    }
  }

  render() {
    let spinner = (
      <div className="drawing" id="loading">
        <div className="loading-dot"></div>
      </div>
    );
    return (
      <body>
        <nav><ul><li><Link to={'/'}>Pokedex</Link></li></ul></nav>
        <section className="pokedex">
          {this.props.loading ? spinner : ''}
          <ul>
              {this.props.pokemon.map(poke => (
                  <PokemonIndexItem key={poke.id}
                                    pokemon={poke}
                                    handleClick={this.handleClick} />
              ))}
          </ul>
          {this.props.children}
        </section>
      </body>
    );
  }
}

export default withRouter(PokemonIndex);
