import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {selectAPokemon} from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  pokemonDetail: selectAPokemon(state)
});

export default connect(
  mapStateToProps
)(PokemonDetail);
