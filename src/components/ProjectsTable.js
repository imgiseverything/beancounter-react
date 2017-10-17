import React, { Component } from 'react';

class ProjectsTable extends Component {
  constructor (props) {

    super(props)
    this.state = this.props;
  }

  // Get the client's title from an object of clients
  getClientTitle(id) {
    var matchedClient = this.state.clients.filter(function (el) {
      return el.id === id
    });

    return matchedClient;
  }

  render() {
    var projectsTableRows = [];
    var accessLevel = this.state.user.accessLevel;

    this.state.projects.forEach(function(project) {
      var clientDetails = this.getClientTitle(project.client);
      projectsTableRows.push(<ProjectsTableRow key={project.id} projectId={project.id} clientTitle={clientDetails[0].title} dueDate={project.dueDate} accessLevel={accessLevel} />);

    }.bind(this));

    return (
      <table>
        <thead>
          <tr>
            <th scope="col" title="Project ID">#</th>
            <th scope="col">Client</th>
            <th scope="col">Due date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          { projectsTableRows }
        </tbody>
      </table>
    );

  }
}

class ProjectsTableRow extends Component {
  constructor (props) {

    super(props)
    this.state = this.props;

  }

  render () {

    var viewLink = "/projects/view/" + this.props.projectId;
    var reInvoiceLink = "/projects/invoice/" + this.props.projectId;
    let actions = null;

    // Superuser v normal user actions
    if (this.state.accessLevel === 'Superuser') {
      actions = <td><a href={ reInvoiceLink } className="button">Re-Invoice</a><a href={ viewLink } className="button">View</a></td>;
    } else {
      actions =  <td><a href={ viewLink } className="button">View</a></td>;
    }

    return (

      <tr>
        <td>{ this.props.projectId }</td>
        <td>{ this.props.clientTitle }</td>
        <td>{ this.props.dueDate }</td>
        { actions }
      </tr>

    );

  }
}

export default ProjectsTable;
