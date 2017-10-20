import React, { Component } from 'react';

class BookingsTable extends Component {
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

    var bookingsTableRows = [];
    var accessLevel = this.state.user.accessLevel;
    this.state.bookings.forEach(function(booking) {
      var clientDetails = this.getClientTitle(booking.client);
      bookingsTableRows.push(<BookingsTableRow key={booking.id} bookingTitle={booking.title} bookingId={booking.id} clientId={clientDetails[0].id} clientTitle={clientDetails[0].title} dateStart={booking.dateStart} dateEnd={booking.dateEnd} accessLevel={accessLevel} />);
    }.bind(this));

    return (
      <div className="calendar calendar--mini">
        <table className="calendar calendar-mini">
          <caption>Upcoming Bookings <a href="/bookings">View all bookings</a></caption>
	       		<thead>
	       			<tr>
		       			<th scope="col">Booking</th>
		       			<th scope="col">Client</th>
		       			<th scope="col">Date</th>
	       			</tr>
	       		</thead>
	       		<tbody>
	       		 { bookingsTableRows }
	       		</tbody>
	       </table>
      </div>
    )
  }
}

class BookingsTableRow extends Component {
  constructor (props) {

    super(props)
    this.state = this.props;

  }
  render () {

    var viewLink = "/bookings/view/" + this.props.bookingId;
    var clientLink = "/clients/view/" + this.props.clientId;

    return (

      <tr>
        <td><a href={ viewLink }>{ this.props.bookingTitle }</a></td>
        <td><a href={ clientLink }>{ this.props.clientTitle }</a></td>
        <td>{ this.props.dateStart }&ndash;{ this.props.dateEnd }</td>
      </tr>

    );

  }
}

export default BookingsTable;
