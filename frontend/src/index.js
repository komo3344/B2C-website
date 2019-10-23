import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import {Home} from './components'
import {Login} from './containers'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/login' component={Login} />
      <Route path='/home' component={Home} />
    </div>
  </Router>,
  document.getElementById('root')
);
