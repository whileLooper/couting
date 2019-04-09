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
      <Row key={`row_id_${employeeList.length}`} style={{marginBottom: '10px'}} gutter={4} type="flex" justify="space-between">
        <Col span={2}>
          <Button
            id={`row_id_${employeeList.length}`}
            type="danger"
            shape="circle"
            icon="minus"
            size="small"
            onClick={(event) => this.handleDeleteEmployee(event)}
          />
        </Col>
        <Col span={10}><Input /></Col>
        <Col span={6}><Input /></Col>
        <Col span={6}><Input /></Col>
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

  handleDeleteEmployee = (event) => {
    const key = event.target.getAttribute('id');
    let { employeeList } = this.state;
    let filtered = employeeList.filter((val) => val.key !== key);
    this.setState({
      employeeList: filtered,
    });
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
          <Col span={2}></Col>
          <Col span={10}>姓名</Col>
          <Col span={6}>底薪</Col>
          <Col span={6}>小费</Col>
        </Row>
        {employeeList.map(val => val)}
        {this.addButton()}
      </div>
    );
  }
}
