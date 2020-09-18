import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/NaviBar';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';

function App() {
  return (
    <>
      <NaviBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;
