import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {requestAPokemon} from '../../actions/pokemon_actions';

const mapStateToProps = (state) => ({
  pokemonDetail: state.pokemonDetail,
  loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
  requestAPokemon: id => dispatch(requestAPokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
