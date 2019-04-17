import React, { useCallback } from 'react';
import { Form,Table, Input, Row, Card, Icon, Typography } from 'antd';
import { FirebaseContext } from 'Component/Firebase';
const { Text } = Typography;


export class AccountingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      company: [],
      payroll: null,
    };
  }

  componentDidMount = () => {
    this.props.firebase.companies()
    .onSnapshot((doc) => {
      console.log(doc.data());
      this.setState({
        payroll: doc.data(),
      });
      this.setState({
        company: doc.data().companyInfo,
      });
      console.log(doc.data().companyInfo);
    });

  }
  

  render() {
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
      <div>
        <div>
          <Row type="flex" justify="center">
            <Card
              size="small"
              title="Boiling Crab and Crawfish Inc"
              style={{ width: 350, marginBottom: 20, textAlign: 'center' }}
              >
                <p>
                    <Text disabled><Icon type="bank" /></Text> <Text strong>{this.state.company.DBA}</Text>
                </p>
                <p>    
                    <Text disabled><Icon type="money-collect" /></Text> <Text strong>{this.state.company.companyName}</Text>
                </p>
                <p>
                    <Text disabled><Icon type="contacts" /></Text><Text strong>{this.state.company.Address}</Text>
                </p> 
                <p> 
                    <Text disabled><Icon type="phone" /></Text> <Text strong>{this.state.company.contact}</Text>
                </p> 
                <p> 
                    <Text disabled><Icon type="wechat" /></Text> <Text strong>{this.state.company.wechat}</Text>
                </p>
            </Card>
          </Row>
        </div>
        <div>
          {payroll ? monthList.map((eachMonth) => (
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
          )) : null}
        </div>
      </div>
      


    );
  }
}

export default Form.create({ name: 'accounting' })(AccountingPage);