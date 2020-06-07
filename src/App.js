import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Strain link [with key]:  http://strainapi.evanbusse.com/oNKr3rg/strains/search/all

//Components:
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Strains from './components/Strains';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Signup from './components/Signup';

import './sass/App.scss';

function App() {
  return (
    <div className='App'>
      <Dashboard />
      <Switch>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/strains'>
          <Strains />
        </Route>
        <Route path='/settings'>
          <Settings />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;