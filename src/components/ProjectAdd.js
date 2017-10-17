import React, { Component } from 'react';

import JSON from '../data.json'; // Data model

// Build Project Add Form component
class ProjectAdd extends Component {
  constructor ({match}) {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = JSON;
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
        <h1>Add project</h1>
        <form action="" method="post" onSubmit={ this.handleSubmit }>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" value={ this.state.title } id="title" name="title" onChange={ this.handleChange.bind(this) } required />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea value={ this.state.description } id="description" name="description" onChange={ this.handleChange.bind(this) } required />
          </div>
          <div>
            <label htmlFor="client">Client</label>
            <select value={ this.state.client } id="client" name="client" onChange={ this.handleChange.bind(this) } required>
              <option value="">Choose</option>
              <option value="1">Client 1</option>
              <option value="2">Client 2</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProjectAdd;
