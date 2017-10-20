import React, { Component } from 'react';
import JSON from '../../data.json'; // Data model

// Build Client Edit Form component
class ClientEdit extends Component {
  constructor ({match}) {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Get the JSON data then manipulate it to only set the state of the data we need
    var data = JSON;
    data.id = match.params.id;
    data.client = data.clients.filter(function (el) {
      return el.id === data.id
    });

    data.title = data.client[0].title;

    this.state = data;

  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    if(event.target.checkValidity() === true){
      alert('A form was submitted, add some visual feedback and call an API that updates the database');
      event.preventDefault();
    }
  }

  render () {
    return (
      <div>
        <h1>Edit client</h1>
        <form action="" method="post" onSubmit={ this.handleSubmit }>
          <div>
            <label htmlFor="title">Client title</label>
            <input type="text" value={ this.state.title } id="title" name="title" onChange={ this.handleChange.bind(this) } required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ClientEdit;
