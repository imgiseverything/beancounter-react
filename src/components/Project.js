import React, { Component } from 'react';
import JSON from '../data.json'; // Projects data

// Build Projects component
class Project extends Component {
  constructor ({match}) {
    super()

    // Get the JSON data then manipulate it to only set the state of the data we need
    var data = JSON;
    data.id = match.params.id;
    data.project = data.projects.filter(function (el) {
      return el.id === data.id
    });
    data.client = data.clients.filter(function (el) {
      return el.id === data.project[0].client
    });

    this.state = data;

  }

  render () {

    // var clientLink = "/clients/view/" + this.state.project[0].client.id; Commented out until we set up the client section
    var editLink = "/projects/edit/" + this.state.id;
    var invoiceLink = "/projects/invoice/" + this.state.id;

    return (
      <div className="projects">
        <div>
          <div>
            <h1>{ this.state.project[0].title }</h1>
            <p>Client: { this.state.client[0].title}</p>
          </div>
          <div>
            <ul>
              <li><a href={ invoiceLink } className="button">Send invoice</a></li>
              <li><a href={ editLink } className="button">Edit project</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
