import {connect} from 'react-redux';
import PokemonIndex from './pokemon_index';
import {selectAllPokemon} from '../../reducers/selectors';
import {requestAPokemon, requestAllPokemon} from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state),
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon()),
  requestAPokemon: (id) => dispatch(requestAPokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
