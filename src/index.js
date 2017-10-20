import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Dashboard from './components/Dashboard';
import Bookings from './components/bookings/Bookings';
import BookingView from './components/bookings/BookingView';
import BookingAdd from './components/bookings/BookingAdd';
import BookingDelete from './components/bookings/BookingDelete';
import BookingEdit from './components/bookings/BookingEdit';
import Clients from './components/clients/Clients';
import ClientView from './components/clients/ClientView';
import ClientAdd from './components/clients/ClientAdd';
import ClientDelete from './components/clients/ClientDelete';
import ClientEdit from './components/clients/ClientEdit';
import Projects from './components/projects/Projects';
import ProjectView from './components/projects/ProjectView';
import ProjectAdd from './components/projects/ProjectAdd';
import ProjectDelete from './components/projects/ProjectDelete';
import ProjectEdit from './components/projects/ProjectEdit';
import ProjectInvoice from './components/projects/ProjectInvoice';
import './index.css';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/projects/add" component={ProjectAdd}/>
      <Route path="/projects/invoice/:id" component={ProjectInvoice}/>
      <Route path="/projects/delete/:id" component={ProjectDelete}/>
      <Route path="/projects/edit/:id" component={ProjectEdit}/>
      <Route path="/projects/view/:id" component={ProjectView}/>
      <Route exact path="/projects" component={Projects}/>

      <Route path="/bookings/add" component={BookingAdd}/>
      <Route path="/bookings/delete/:id" component={BookingDelete}/>
      <Route path="/bookings/edit/:id" component={BookingEdit}/>
      <Route path="/bookings/view/:id" component={BookingView}/>
      <Route exact path="/bookings" component={Bookings}/>

      <Route path="/clients/add" component={ClientAdd}/>
      <Route path="/clients/delete/:id" component={ClientDelete}/>
      <Route path="/clients/edit/:id" component={ClientEdit}/>
      <Route path="/clients/view/:id" component={ClientView}/>
      <Route exact path="/clients" component={Clients}/>
    </div>
  </Router>),
  document.getElementById('root')
);
