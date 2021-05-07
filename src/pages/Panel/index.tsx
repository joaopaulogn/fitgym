import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Settings from '../Settings';
import Contact from '../Contact';

const Panel = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  </Router>
);

export default Panel;
