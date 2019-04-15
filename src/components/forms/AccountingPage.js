import React, { useCallback } from 'react';
import { Form,Table, Badge, Menu, Dropdown, Input, } from 'antd';
import { FirebaseContext } from 'Component/Firebase';


export class AccountingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      company: [],
      employeeList: [],
      payroll: null,
    };
  }

  componentDidMount = () => {
    console.log('did mount');
    this.props.firebase.companies()
    .onSnapshot((doc) => {
      console.log(doc.data());
      this.setState({
        payroll: doc.data(),
      });
    });
  }
  

  render() {
    console.log('rendering...');
    const { payroll } = this.state;
    const monthList = [];
    if (payroll) {
      Object.keys(payroll.monthPayroll).map((key) => monthList.push(key));
    }

    const columns = [
      { title: '姓名', dataIndex: 'employeeName', key: 'employeeName' },
      { title: '底薪', dataIndex: 'baseSalary', key: 'baseSalary' },
      { title: '小费', dataIndex: 'baseTips', key: 'baseTips' },
    ];

    return (
      payroll ? monthList.map((eachMonth) => (
        <div>
          <span>{eachMonth}</span>
          <Table
            key={eachMonth}
            className="components-table-demo-nested"
            columns={columns}
            dataSource={payroll.monthPayroll[eachMonth]}
            size="small"
            pagination={false}
          />
        </div>
      )) : null
    );
  }
}

export default Form.create({ name: 'accounting' })(AccountingPage);