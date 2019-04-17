import React from "react";
import { Row, Col, Input, Button, Select } from "antd";
const Option = Select.Option;
export default class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],
      monthList: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
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

  handleMonthSelect = () => {

  }

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
    const { employeeList, monthList } = this.state;
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
        <Row type="flex" justify="center">
          <Select defaultValue="四月" style={{ width: 100, marginBottom: 20 }} onChange={this.handleMonthSelect()}>
            {monthList.map((month) => (
              <Option value={month}>{month}</Option>
            ))}
          </Select>
        </Row>
        {employeeRows}
        {this.addButton()}
      </div>
    );
  }
}
