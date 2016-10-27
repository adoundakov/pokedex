import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', attack: '', defense: '', image_url: '', moves: "", items: [], poke_type: 'fire'
    };
    this.update = this.update.bind(this);
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewPokemon(this.state);
  }

  render() {
    const types = ["fire","electric","normal","ghost","psychic","water",
      "bug","dragon","grass","fighting","ice","flying","poison",
      "ground","rock","steel"];
    let typeOptions = types.map((type, idx) => (
      <option key={idx} value={type}>{type}</option>)
      );
    let errors = this.props.errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ));

    return (
      <section className="pokemon-detail">
        <form className='pokemon-form'>
          <h2>Create a Pokemon!</h2>

          <ul>{errors}</ul><br/>

          <input type='text'placeholder='Name' onChange={this.update('name')}/><br/>
          <text>Select type</text><select onChange={this.update('poke_type')}>
            {typeOptions}
          </select><br/>
          <input type='text'placeholder='Attack' onChange={this.update('attack')}/><br/>
          <input type='text'placeholder='Defense' onChange={this.update('defense')}/><br/>
          <input type='text'placeholder='Moves (sep by comma)' onChange={this.update('moves')}/><br/>
          <input type='text'placeholder='Image URL' onChange={this.update('image_url')}/><br/>
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        </form>
      </section>
    );
  }
}


export default PokemonForm;
