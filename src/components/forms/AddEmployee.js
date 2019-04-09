import React from 'react';
import { Row, Col, Input, Button } from 'antd';


export default class EmployeeForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],
    };
  }

  componentDidMount = () => {
    const { employeeList } = this.state;
    employeeList.push(this.newRow());
    this.setState({
      employeeList: employeeList,
    });
  }
  
  newRow = () => {
    const { employeeList } = this.state;
    return (
      <Row key={`row_id_${employeeList.length + 1}`} style={{marginBottom: '10px'}} gutter={4} type="flex" justify="space-between">
        <Col span={9}><Input /></Col>
        <Col span={5}><Input /></Col>
        <Col span={5}><Input /></Col>
        <Col span={5}><Input /></Col>
        {/* <Col span={4}><Input /></Col> */}
      </Row>
    )
  }
  
  handleAddEmployee = () => {
    const { employeeList } = this.state;
    employeeList.push(this.newRow());

    this.setState({
      employeeList: employeeList,
    })
  }
  
  addButton = () => {
    return (
      <Row type="flex" justify="space-between">
        <Col span={24}>
          <Button style={{width: '100%'}} type="dashed" onClick={() => this.handleAddEmployee()}>添加员工</Button>
        </Col>
      </Row>
    )
  }

  render() {
    const { employeeList } = this.state;
    return (
      <div>
        <Row type="flex" justify="space-between">
          <Col span={9}>姓名</Col>
          <Col span={5}>工时</Col>
          <Col span={5}>工资</Col>
          <Col span={5}>小费</Col>
          {/* <Col span={4}>总额</Col> */}
        </Row>
        {employeeList.map(val => val)}
        {this.addButton()}
      </div>
    );
  }
}
