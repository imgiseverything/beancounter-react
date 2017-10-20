import React, { Component } from 'react';
import JSON from '../../data.json'; // Bookings data

// Build Bookings component
class BookingView extends Component {
  constructor ({match}) {
    super()

    // Get the JSON data then manipulate it to only set the state of the data we need
    var data = JSON;
    data.id = match.params.id;
    data.booking = data.bookings.filter(function (el) {
      return el.id === data.id
    });
    data.client = data.clients.filter(function (el) {
      return el.id === data.booking[0].client
    });

    this.state = data;

  }

  render () {

    var clientLink = "/clients/view/" + this.state.booking[0].client.id;
    var editLink = "/bookings/edit/" + this.state.id;
    var deleteLink = "/bookings/delete/" + this.state.id;

    return (
      <div className="bookings">
        <div>
          <div>
            <h1>{ this.state.booking[0].title }</h1>
            <p>Client: <a href={ clientLink }>{ this.state.client[0].title}</a></p>
            <p>Date(s): {this.state.booking[0].dateStart}&ndash;{this.state.booking[0].dateEnd}</p>
          </div>
          <div>
            <ul>
              <li><a href={ editLink } className="button">Edit booking</a></li>
              <li><a href={ deleteLink } className="button">Delete booking</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingView;
