import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import BookingsTable from './BookingsTable';
import JSON from '../../data.json'; // Data model

// Build Bookings component
class Bookings extends Component {
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
            <h1>Bookings</h1>
            <p><Link to="/bookings/add" className="button">Add new booking</Link></p>
          </div>
          <BookingsTable bookings={this.state.bookings} user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default Bookings;
