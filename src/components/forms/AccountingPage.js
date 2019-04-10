import React from 'react';
import {
  Form,Table, Badge, Menu, Dropdown, Icon
} from 'antd';

export class AccountingPage extends React.Component {
  

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          Action 1
        </Menu.Item>
        <Menu.Item>
          Action 2
        </Menu.Item>
      </Menu>
    );

    const expandedRowRender = () => {
      const columns = [
        { title: '姓名', dataIndex: 'name', key: 'name' },
        { title: '底薪', dataIndex: 'baseSalary', key: 'baseSalary' },
        { title: '小费', dataIndex: 'tips', key: 'tips' },
      ];
  
      const data = [];
      for (let i = 0; i < 3; ++i) {
        data.push({
          key: i,
          name: 'John Doe',
          baseSalary: '123.00',
          tips: '59.05',
        });
      }
      return (
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      );
    };

    const columns = [
      { title: '公司名称(Legal name)', dataIndex: 'legalName', key: 'legalName' },
      { title: '公司招牌名字(DBA)', dataIndex: 'dba', key: 'dba' },
      { title: '公司税号', dataIndex: 'taxNum', key: 'taxNum' },
      { title: '联系信息', dataIndex: 'contact', key: 'contact' },
      { title: '微信号', dataIndex: 'wechat', key: 'chat' },
      { title: 'Status', key: 'state', render: () => <span><Badge status="success" />Finished</span> },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        legalName: ' Boiling Crab and Crawfish Inc',
        dba: 'Shaking Crab',
        taxNum: 'xxxxx',
        contact: 'Eddie(678-xxx-xxxx)',
        wechat: 'xxxxzxxxx',
      });
    }


    
    return (
      <Table
        className="components-table-demo-nested"
        columns={columns}
        expandedRowRender={expandedRowRender}
        dataSource={data}
      />
    );
  }
}

export default Form.create({ name: 'accounting' })(AccountingPage);