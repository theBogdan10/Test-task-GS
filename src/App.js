import React from 'react';
import { Route, NavLink, BrowserRouter, Switch } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import './App.css';

import MainPage from './components/MainPage/MainPage'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={SignIn} />
      <Route path='/main' component={MainPage} />
    </Switch>
  );
}

export default App;
