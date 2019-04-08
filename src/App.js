import React, { Component } from 'react';
import RegisterForm from './components/forms/RegistrationForm';

class App extends Component {
  render() {
    return (
      <div style={{margin: '2% 20% 0 0'}}>
        <RegisterForm />
      </div>
    );
  }
}

export default App;
