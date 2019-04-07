import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegisterForm from './components/forms/RegistrationForm';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={RegisterForm} />
        <Route exact path="/clients" component={RegisterForm} />
        <Route exact path="/accounting" component={RegisterForm} />
      </Router>
    );
  }
}

export default App;
