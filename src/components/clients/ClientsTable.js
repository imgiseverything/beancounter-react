import React, { Component } from 'react';

class ClientsTable extends Component {
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
    var clientsTableRows = [];
    var accessLevel = this.state.user.accessLevel;

    this.state.clients.forEach(function(client) {
      clientsTableRows.push(<ClientsTableRow key={client.id} clientId={client.id} clientTitle={client.title} accessLevel={accessLevel} />);

    });

    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Client</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          { clientsTableRows }
        </tbody>
      </table>
    );

  }
}

class ClientsTableRow extends Component {
  constructor (props) {

    super(props)
    this.state = this.props;

  }

  render () {

    var viewLink = "/clients/view/" + this.props.clientId;
    var editLink = "/clients/view/" + this.props.clientId;
    let actions = null;

    // Superuser v normal user actions
    if (this.state.accessLevel === 'Superuser') {
      actions = <td><a href={ editLink } className="button">Edit</a><a href={ viewLink } className="button">View</a></td>;
    } else {
      actions =  <td><a href={ viewLink } className="button">View</a></td>;
    }

    return (

      <tr>
        <td>{ this.props.clientTitle }</td>
        { actions }
      </tr>

    );

  }
}

export default ClientsTable;
