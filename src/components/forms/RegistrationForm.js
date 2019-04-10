import React from 'react';
import {
  // eslint-disable-next-line
  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Divider, 
} from 'antd'; 
import EmployeeForm from './AddEmployee';
import { FirebaseContext } from 'Component/Firebase';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

export class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const formValue = this.formatFormValue(values);
        console.log('Received values of form: ', formValue);
        // dispath firebase set data function here
      }
    });
  }

  // convert form object into array base on employee id
  formatFormValue = (values) => {
    let employeeMap = {};
    Object.keys(values).forEach(id => {
      const index = id.split('_')[1];
      employeeMap[index] = {
        name: values[`employee_${index}_name`],
        baseSalary: values[`employee_${index}_baseSalary`],
        baseTips: values[`employee_${index}_baseTips`],
      }
    });
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          label="公司名称(Legal name)"
        >
           Boiling Crab and Crawfish Inc
        </Form.Item>
        <Form.Item
          label="公司招牌名字(DBA)"
        >
         Shaking Crab
        </Form.Item>
        <Form.Item
          label="公司税号"
        >
          XXXXXXX
        </Form.Item>
        <Form.Item
          label="联系信息"
        >
          Eddie(678-XXX-XXXX)
        </Form.Item>
        <Form.Item
          label="微信号"
        >
          XXXX
        </Form.Item>
        <FirebaseContext.Consumer>
          {(firebase) => <EmployeeForm {...this.props} firebase={firebase} />}
        </FirebaseContext.Consumer>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'register' })(RegistrationForm);