import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import ClientsTable from './ClientsTable';
import JSON from '../../data.json'; // Data model

// Build Clients component
class Clients extends Component {
  constructor () {
    super()

    var data = JSON;
    this.state = data;
  }
  render () {
    return (
      <div className="clients">
        <div>
          <div>
            <h1>Clients</h1>
            <p><Link to="/clients/add" className="button">Add new client</Link></p>
          </div>
          <ClientsTable user={this.state.user} clients={this.state.clients} />
        </div>
      </div>
    );
  }
}

export default Clients;
