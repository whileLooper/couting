import React from 'react';
import {
  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Divider,
} from 'antd';

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
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '+1',
    })(
      <Select style={{ width: 70 }}>
        <Option value="+1">+1</Option>
      </Select>
    );

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          label="公司名称（Legal name）： Boiling Crab and Crawfish Inc"
        >
        </Form.Item>
        <Form.Item
          label="公司招牌名字（DBA）： Shaking Crab"
        >
        </Form.Item>
        <Form.Item
          label="公司税号: XXXXXXX"
        >
        </Form.Item>
        <Form.Item
          label="联系信息: Eddie(678-XXX-XXXX)"
        >
        </Form.Item>
        <Form.Item
          label="微信号: XXXX"
        >
        </Form.Item>
        <Form.Item
          label="员工姓名"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="工作时长"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="工资总额"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="小费总额"
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'register' })(RegistrationForm);