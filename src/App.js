import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row, Col } from 'antd';
import RegisterForm from './components/forms/RegistrationForm';

class App extends Component {
  render() {
    return (
      <Router>
        <Row style={{height: '4vw'}}></Row>
        <Row  type="flex" justify="space-around" align="middle">
          <Col xs={2} sm={4} md={4} lg={8} xl={8}></Col>
          <Col xs={20} sm={16} md={16} lg={8} xl={8}>
            <Route exact path="/" component={RegisterForm} />
            <Route exact path="/clients" component={RegisterForm} />
            <Route exact path="/accounting" component={RegisterForm} />
          </Col>
          <Col xs={2} sm={4} md={4} lg={8} xl={8}></Col>
        </Row>
      </Router>
    );
  }
}

export default App;
