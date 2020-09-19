import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Pages
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
// Components
import NaviBar from './components/NaviBar';
import Footer from './components/Footer';

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
      <Footer />
    </>
  );
}

export default App;
