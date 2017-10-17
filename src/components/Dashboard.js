import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import ProjectsTable from './ProjectsTable';
import BookingsTable from './BookingsTable';
import JSON from '../data.json'; // Data model

// Build Dashboard component
class Dashboard extends Component {
  constructor () {
    super()

    var data = JSON;
    this.state = data;
  }
  render () {
    return (
      <div className="dashboard">
        <div>
          <div>
            <h1>Gettin started</h1>
            <p>Manage your online work. Create and send quotes (proposals). File and send invoices (projects).</p>
          </div>
          <div>
            <p><Link to="/projects/add" className="button">Add new project</Link></p>
          </div>
          <ProjectsTable projects={this.state.projects} user={this.state.user} clients={this.state.clients} />
        </div>
        <BookingsTable bookings={this.state.bookings} user={this.state.user} clients={this.state.clients} />
      </div>
    );
  }
}

export default Dashboard;
