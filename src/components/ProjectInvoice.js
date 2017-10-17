import React, { Component } from 'react';

import JSON from '../data.json'; // Data model

// Build Project Invoice Form component
class ProjectInvoice extends Component {
  constructor ({match}) {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Get the JSON data then manipulate it to only set the state of the data we need
    var d = new Date();
    var data = JSON;

    data.id = match.params.id;

    data.project = data.projects.filter(function (el) {
      return el.id === data.id
    });

    data.client = data.clients.filter(function (el) {
      return el.id === data.project[0].client
    });

    data.subject = 'Invoice for ' + data.project[0].title;
    data.message = 'Dear ' + data.client[0].contact.name + 'Please find attached an invoice for ' + data.project[0].title;

    data.day = d.getDate();
    data.month = d.getMonth();
    data.year = d.getFullYear();

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
      alert('A form was submitted, add some visual feedback and call an API that sends the invoice email');
      event.preventDefault();
    }
  }

  render () {
    return (
      <div>
        <h1>Send invoice</h1>
        <form action="" method="post" onSubmit={ this.handleSubmit }>
          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" value={ this.state.subject } id="subject" name="subject" onChange={ this.handleChange.bind(this) } required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea value={ this.state.message } id="message" name="message" onChange={ this.handleChange.bind(this) } required />
          </div>
          <fieldset>
            <legend>Due Date</legend>

            <div>
              <label htmlFor="day">Day (DD)</label>
              <input type="number" value={ this.state.day } id="day" name="day" onChange={ this.handleChange.bind(this) } required min="01" max="31" />
            </div>

            <div>
              <label htmlFor="month">Month (MM)</label>
              <input type="number" value={ this.state.month } id="month" name="month" onChange={ this.handleChange.bind(this) } required min="01" max="31" />
            </div>

            <div>
              <label htmlFor="year">Year (YYYY)</label>
              <input type="number" value={ this.state.year } id="year" name="year" onChange={ this.handleChange.bind(this) } required />
            </div>
          </fieldset>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProjectInvoice;
