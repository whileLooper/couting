import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row, Col } from 'antd';
import RegisterForm from 'Component/forms/RegistrationForm';
import AccountingPage from 'Component/forms/AccountingPage';
import { FirebaseContext } from 'Component/Firebase';

class App extends Component {
  render() {
    return (
      <FirebaseContext.Consumer>
        {(firebase) => (
          <Router>
            <Row style={{height: '4vw'}}></Row>
            <Row  type="flex" justify="space-around" align="middle">
              <Col xs={1} sm={3} md={4} lg={5} xl={5}></Col>
              <Col xs={22} sm={18} md={16} lg={14} xl={14}>
                <Route exact path="/"  component={() => <RegisterForm firebase={firebase} />} />
                <Route exact path="/clients"  component={() => <RegisterForm firebase={firebase} />} />
                <Route exact path="/accounting" component={() => <AccountingPage firebase={firebase} />} />
              </Col>
              <Col xs={1} sm={3} md={4} lg={5} xl={5}></Col>
            </Row>
          </Router>
        )}
      </FirebaseContext.Consumer>
    );
  }
}

export default App;
