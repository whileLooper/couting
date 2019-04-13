import React from 'react';
import { Form, Modal, Button, Card, Row, Typography, Icon } from 'antd'; 
import EmployeeForm from './AddEmployee';
const { Text } = Typography;

export class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  success = () => {
    Modal.success({
      title: '成功提交！',
      content: '我们会尽快对您提交的表格进行处理， 谢谢～',
    });
  };

  error = () => {
    Modal.error({
      title: '出错啦😱',
      content: '请重新提交表格，或者联系我们。抱歉～',
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const formValue = this.formatFormValue(values);
        this.props.firebase.submitForm(formValue)
        .then(() => {
            this.success();
            setTimeout(() => {
              window.location.reload();
            }, 3000);
        })
        .catch((error) => {
          this.error();
        });
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
    return employeeMap;
  }

  render() {
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 4,
        },
        lg: {
          span: 16,
          offset: 4,
        }
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row type="flex" justify="center">
          <Card
            size="small"
            title="Boiling Crab and Crawfish Inc"
            style={{ width: 350, marginBottom: 20, textAlign: 'center' }}
          >
            <p>
              <Text disabled><Icon type="bank" /></Text> <Text strong>Shaking Crab</Text>
            </p>
            <p>
              <Text disabled><Icon type="money-collect" /></Text> <Text strong>xxxx-xxxx</Text>
            </p>
            <p>
              <Text disabled><Icon type="contacts" /></Text> <Text strong>Eddie</Text>
            </p>
            <p>
              <Text disabled><Icon type="phone" /></Text> <Text strong>xxx-xxx-xxxx</Text>
            </p>
            <p>
              <Text disabled><Icon type="wechat" /></Text> <Text strong>xxx-xxx-xxxx</Text>
            </p>
          </Card>
        </Row>
        <EmployeeForm {...this.props} />
        <Form.Item {...tailFormItemLayout}>
          <Button block type="primary" htmlType="submit" style={{marginTop: 30}}>提交</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'register' })(RegistrationForm);