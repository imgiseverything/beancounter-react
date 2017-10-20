import React, { Component } from 'react';
import JSON from '../../data.json'; // Data model

// Build Booking Edit Form component
class BookingEdit extends Component {
  constructor ({match}) {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Get the JSON data then manipulate it to only set the state of the data we need
    var data = JSON;
    data.id = match.params.id;
    data.booking = data.bookings.filter(function (el) {
      return el.id === data.id
    });

    data.title = data.booking[0].title;
    data.client = data.booking[0].client;
    data.dateStart = data.booking[0].dateStart;
    data.dateEnd = data.booking[0].dateEnd;

    this.state = data;

  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    if(event.target.checkValidity() === true){
      alert('A form was submitted, add some visual feedback and call an API that updates the database');
      event.preventDefault();
    }
  }

  render () {
    return (
      <div>
        <h1>Edit booking</h1>
        <form action="" method="post" onSubmit={ this.handleSubmit }>
          <div>
            <label htmlFor="title">Booking title</label>
            <input type="text" value={ this.state.title } id="title" name="title" onChange={ this.handleChange.bind(this) } required />
          </div>
          <div>
            <label htmlFor="client">Client</label>
            <select value={ this.state.client } id="client" name="client" onChange={ this.handleChange.bind(this) } required>
              <option value="">Choose</option>
              <option value="1">Client 1</option>
              <option value="2">Client 2</option>
            </select>
          </div>
          <div>
            <label htmlFor="dateStart">Start date</label>
            <input type="text" value={ this.state.dateStart } id="dateStart" name="date_start" onChange={ this.handleChange.bind(this) } required />
          </div>
          <div>
            <label htmlFor="dateEnd">End date</label>
            <input type="text" value={ this.state.dateEnd } id="dateEnd" name="date_end" onChange={ this.handleChange.bind(this) } required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default BookingEdit;
