import React, { Component } from 'react';

import JSON from '../../data.json'; // Data model

// Build Project Add Form component
class ClientAdd extends Component {
  constructor ({match}) {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    var data = JSON;
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
      alert('A form was submitted, add some visual feedback and call an API that adds the project to a database');
      event.preventDefault();
    }
  }

  render () {
    return (
      <div>
        <h1>Add client</h1>
        <form action="" method="post" onSubmit={ this.handleSubmit }>
          <div>
            <label htmlFor="title">Title</label>
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

export default ClientAdd;
