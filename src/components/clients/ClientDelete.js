import React, { Component } from 'react';
import JSON from '../../data.json'; // Data model

// Build Client Delete Form component
class ClientDelete extends Component {
  constructor ({match}) {
    super()

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

  handleSubmit(event) {
    if(event.target.checkValidity() === true){
      alert('A form was submitted, add some visual feedback and call an API that updates the database');
      event.preventDefault();
    }
  }

  render () {
    return (
      <div>
        <h1>Delete { this.state.title }</h1>
        <form action="" method="post" onSubmit={ this.handleSubmit }>
          <div>
            <button type="submit">Are you sure?</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ClientDelete;
