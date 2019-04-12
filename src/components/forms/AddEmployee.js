import React from "react";
import { Row, Col, Input, Button, Select } from "antd";

export default class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: []
    };
  }

  componentDidMount = () => {
    const { employeeList } = this.state;
    employeeList.push(`employee_${employeeList.length}`);
    this.setState({
      employeeList: employeeList
    });
  };

  handleAddEmployee = () => {
    const { employeeList } = this.state;
    // console.log(+(employeeList[employeeList.length - 1].split('_')[1]) + 1);
    const newIndex = +(employeeList[employeeList.length - 1].split('_')[1]) + 1;
    employeeList.push(`employee_${newIndex}`);

    this.setState({
      employeeList: employeeList
    });
  };

  handleDeleteEmployee = (event) => {
    const key = event.target.getAttribute("id");
    let { employeeList } = this.state;
    let filtered = employeeList.filter((val) => val !== key);
    this.setState({
      employeeList: filtered
    });
  };

  addButton = () => {
    return (
      <Row type="flex" justify="space-between">
        <Col span={24}>
          <Button
            style={{ width: "100%" }}
            type="dashed"
            onClick={() => this.handleAddEmployee()}
          >
            添加员工
          </Button>
        </Col>
      </Row>
    );
  };

  render() {
    const { employeeList } = this.state;
    const length = employeeList.length;
    const { getFieldDecorator } = this.props.form;

    const employeeRows = employeeList.map((id) => (
      <Row
        key={id}
        style={{ marginBottom: "10px" }}
        gutter={4}
        type="flex"
        justify="space-between"
      >
        <Col span={2}>
          {length <= 1 ? null : <Button
            id={id}
            type="danger"
            shape="circle"
            icon="minus"
            size="small"
            onClick={(event) => this.handleDeleteEmployee(event)}
          />}
        </Col>
        <Col span={8}>
          {getFieldDecorator(`${id}_name`, {})(<Input placeholder="员工姓名" />)}
        </Col>
        <Col span={7}>
          {getFieldDecorator(`${id}_baseSalary`, {})( <Input placeholder="底薪" /> )}
        </Col>
        <Col span={7}>
          {getFieldDecorator(`${id}_baseTips`, {})(<Input placeholder="小费" />)}
        </Col>
      </Row>
    ));

    return (
      <div>
        {/* <Row type="flex" justify="space-between">
          <Col span={2} />
          <Col span={8}>姓名</Col>
          <Col span={7}>底薪</Col>
          <Col span={7}>小费</Col>
        </Row> */}
        {employeeRows}
        {this.addButton()}
      </div>
    );
  }
}
