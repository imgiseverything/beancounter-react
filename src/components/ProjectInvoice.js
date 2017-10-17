import React, { Component } from 'react';

import JSON from '../data.json'; // Data model

// Build Project Invoice Form component
class ProjectInvoice extends Component {
  constructor ({match}) {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // eslint-disable-next-line
    this.state = JSON;
    this.setState({
      id: match.params.id
    });
    // eslint-disable-next-line
    this.state.project = this.state.projects.filter(function (el) {
      return el.id === match.params.id
    });

  }

  componentWillMount() {

    var d = new Date();

    this.setState({
      subject: 'Invoice for ' + this.state.project[0].title,
      message: '',
      day: d.getDate(),
      month: d.getMonth(),
      year: d.getFullYear()
    });

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
