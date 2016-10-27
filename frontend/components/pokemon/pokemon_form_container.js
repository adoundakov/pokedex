import {connect} from 'react-redux';
import PokemonForm from './pokemon_form';
import {createNewPokemon} from '../../actions/pokemon_actions';
import {findLastId} from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  createNewPokemon: (pokemon) => dispatch(createNewPokemon(pokemon))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);
