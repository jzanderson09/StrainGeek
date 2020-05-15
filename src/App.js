import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components:
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';

import './sass/App.scss';

function App() {
  return (
    <div className='App'>
      <Dashboard />
      <Switch>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/settings'>
          <Settings />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
