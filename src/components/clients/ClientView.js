import React, { Component } from 'react';
import JSON from '../../data.json'; // Clients data

// Build Clients component
class ClientView extends Component {
  constructor ({match}) {
    super()

    // Get the JSON data then manipulate it to only set the state of the data we need
    var data = JSON;
    data.id = match.params.id;
    data.client = data.clients.filter(function (el) {
      return el.id === data.id
    });

    this.state = data;

  }

  render () {

    var editLink = "/clients/edit/" + this.state.id;
    var deleteLink = "/clients/delete/" + this.state.id;

    return (
      <div className="clients">
        <div>
          <div>
            <h1>{ this.state.client[0].title }</h1>
          </div>
          <div>
            <ul>
              <li><a href={ editLink } className="button">Edit client</a></li>
              <li><a href={ deleteLink } className="button">Delete client</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientView;
