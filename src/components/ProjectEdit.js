import React, { Component } from 'react';
import JSON from '../data.json'; // Data model

// Build Project Edit Form component
class ProjectEdit extends Component {
  constructor ({match}) {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Get the JSON data then manipulate it to only set the state of the data we need
    var data = JSON;
    data.id = match.params.id;
    data.project = data.projects.filter(function (el) {
      return el.id === data.id
    });

    data.title = data.project[0].title;
    data.description = data.project[0].description;
    data.client = data.project[0].client;

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
        <h1>Edit project</h1>
        <form action="" method="post" onSubmit={ this.handleSubmit }>
          <div>
            <label htmlFor="title">Project title</label>
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

export default ProjectEdit;
