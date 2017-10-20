import React, { Component } from 'react';
import JSON from '../../data.json'; // Projects data

// Build Projects component
class ProjectView extends Component {
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

    var clientLink = "/clients/view/" + this.state.client[0].id;
    var editLink = "/projects/edit/" + this.state.id;
    var invoiceLink = "/projects/invoice/" + this.state.id;
    var deleteLink = "/projects/delete/" + this.state.id;

    return (
      <div className="projects">
        <div>
          <div>
            <h1>{ this.state.project[0].title }</h1>
            <p>Client: <a href={ clientLink }>{ this.state.client[0].title}</a></p>
            <p>{ this.state.project[0].description }</p>
          </div>
          <div>
            <ul>
              <li><a href={ invoiceLink } className="button">Send invoice</a></li>
              <li><a href={ editLink } className="button">Edit project</a></li>
              <li><a href={ deleteLink } className="button">Delete project</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectView;
