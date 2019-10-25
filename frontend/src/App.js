import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import {MainPage, StartPage, AuthPage, NotFound} from './page'
import { DetailStore } from './containers';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={StartPage} />
        <Route path='/main' component={MainPage} />
        <Route path='/auth' component={AuthPage} />
        <Route path='/store/:id' component={DetailStore} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
