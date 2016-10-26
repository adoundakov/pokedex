import {connect} from 'react-redux';
import PokemonIndex from './pokemon_index';
import {selectAllPokemon} from '../../reducers/selectors';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

export default connect(
  mapStateToProps
)(PokemonIndex);
