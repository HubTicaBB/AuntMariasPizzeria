import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <Router>
      <Header />
      <Switch>
        <Route path="/orders/new/:pizzaId"></Route>
        <Route path="/orders/new/"></Route>
        <Route path="/orders"></Route>
        <Route path="/"></Route>
      </Switch>
      <Footer />
  </Router>
);

export default App;
