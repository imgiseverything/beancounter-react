import React, { Component } from 'react';

class BookingsTable extends Component {
  constructor (props) {

    super(props)
    this.state = this.props;

  }

  render() {

    var bookingsTableRows = [];
    var accessLevel = this.state.user.accessLevel;
    this.state.bookings.forEach(function(booking) {
      bookingsTableRows.push(<BookingsTableRow key={booking.id} bookingId={booking.id} clientTitle={booking.client.title} dateStart={booking.dateStart} dateEnd={booking.dateEnd} accessLevel={accessLevel} />);
    });

    return (
      <div className="calendar calendar--mini">
        <table className="calendar calendar-mini">
          <caption>Upcoming Bookings <a href="/bookings">View all bookings</a></caption>
	       		<thead>
	       			<tr>
		       			<th scope="col">M</th>
		       			<th scope="col">T</th>
		       			<th scope="col">W</th>
		       			<th scope="col">T</th>
		       			<th scope="col">F</th>
		       			<th scope="col">S</th>
		       			<th scope="col">S</th>
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

    // Commented out until we set up the client section
    // var viewLink = "/bookings/" + this.props.bookingId;

    var viewLink = '#';

    return (

      <tr>
        <td>{ this.props.bookingId }</td>
        <td>{ this.props.clientTitle }</td>
        <td>{ this.props.startDate }&ndash;{ this.props.endDate }</td>
        <td><a href={ viewLink } className="button">View</a></td>
      </tr>

    );

  }
}

export default BookingsTable;
