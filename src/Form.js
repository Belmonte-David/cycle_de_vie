import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      globalTitle: 'Mon formulaire',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      globalTitle: 'Mon formulaire - ' + this.state.title,
    });
    console.log("Titre changé")
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
    });

  }
  
  componentDidMount() {
    console.log("Formulaire rendu")
  }

   
  render() {  
    return (
      <div>
        <h1>{this.state.globalTitle}</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Titre :</label>
          <input id="title" type="text" onChange={this.handleChange} value={this.state.title} />
          <input type="submit" value="submit" />
        </form>

      </div>
    )
  }
 

}

export default Form;