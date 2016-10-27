import React from 'react';
import {withRouter} from 'react-router';
import {findLastId} from '../../reducers/selectors';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(findLastId(this.props.pokemon));
    this.state = {
      name: '', attack: '', defense: '', image_url: '', moves: [], items: [], poke_type: 'fire'
    };
    this.update = this.update.bind(this);
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(e) {
    // deals with submitting form and dispatching create action
    e.preventDefault();
    this.props.createNewPokemon(this.state);
    this.props.router.push(`/pokemon/${findLastId(this.props.pokemon)}`);
  }

  clearForm() {
    this.setState = {
      name: '', attack: '', defense: '', image_url: '', moves: [], items: [], poke_type: ''
    };
  }

  render() {
    const types = ["fire","electric","normal","ghost","psychic","water",
      "bug","dragon","grass","fighting","ice","flying","poison",
      "ground","rock","steel"];
    let typeOptions = types.map((type, idx) => (
      <option key={idx} value={type}>{type}</option>)
      );

    return (
      <form className='pokemon-form'>
        <h2>Create a Pokemon!</h2>
        <input type='text'placeholder='Name' onChange={this.update('name')}/>
        <select onChange={this.update('poke_type')}>
          {typeOptions}
        </select>
        <input type='text'placeholder='Attack' onChange={this.update('attack')}/>
        <input type='text'placeholder='Defense' onChange={this.update('defense')}/>
        <input type='text'placeholder='Moves (sep by comma)' onChange={this.update('moves')}/>
        <input type='text'placeholder='Image URL' onChange={this.update('image_url')}/>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    );
  }
}


export default withRouter(PokemonForm);
