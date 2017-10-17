import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Project from './components/Project';
import ProjectAdd from './components/ProjectAdd';
import ProjectEdit from './components/ProjectEdit';
import ProjectInvoice from './components/ProjectInvoice';
import './index.css';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/projects/add" component={ProjectAdd}/>
      <Route path="/projects/invoice/:id" component={ProjectInvoice}/>
      <Route path="/projects/edit/:id" component={ProjectEdit}/>
      <Route path="/projects/view/:id" component={Project}/>
      <Route exact path="/projects" component={Projects}/>
    </div>
  </Router>),
  document.getElementById('root')
);
