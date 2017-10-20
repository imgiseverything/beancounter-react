import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import ProjectsTable from './ProjectsTable';
import JSON from '../../data.json'; // Data model

// Build Projects component
class Projects extends Component {
  constructor () {
    super()

    var data = JSON;
    this.state = data;
  }
  render () {
    return (
      <div className="projects">
        <div>
          <div>
            <h1>Projects</h1>
            <p><Link to="/projects/add" className="button">Add new project</Link></p>
          </div>
          <ProjectsTable projects={this.state.projects} user={this.state.user} clients={this.state.clients} />
        </div>
      </div>
    );
  }
}

export default Projects;
