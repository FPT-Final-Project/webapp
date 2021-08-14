/* eslint-disable no-shadow */
import React, { useState } from 'react';
import {
  Row, Form, Input, Button, Typography,
} from 'antd';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import authAction, { AuthActions } from '../../stores/actions/auth.action';
import { IRootState } from '../../stores/store';

const { Title } = Typography;
const validatePass = /^.{8,}$/;

const ChangePass: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: IRootState) => state.authentication.user);

  const [disable, setDisable] = useState(false);

  const submit = ({ newpassword } :{newpassword: string}) => {
    dispatch(authAction.changePassword(newpassword));
  };

  const onFormChange = (_changedFields: any[], allFields: any[]) => {
    if (
      allFields.every((field) => field.value)
      && allFields[0].value === '12345678'
      && allFields[1].value === allFields[2].value
    ) {
      setDisable(false);
      return;
    }

    setDisable(true);
  };

  return (
    <>
      <div className="form-changepass">
        <Title className="title" level={2}>Change Password</Title>
        <Row justify="center">
          <Form layout="vertical" onFinish={submit} onFieldsChange={onFormChange}>
            <Form.Item
              label="Current Password"
              name="currentpassword"
              rules={[
                { required: true,
                  message: 'Please input your current password!' },
                {
                  pattern: validatePass,
                  message: 'The input must be least 8 characters in length!',
                }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="New Password"
              name="newpassword"
              rules={[
                { required: true,
                  message: 'Please input your new password!' },
                {
                  pattern: validatePass,
                  message: 'The input must be least 6 characters in length!',
                }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmpassword"
              rules={[{ required: true, message: 'Please input your confirm password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button className="btn-change" htmlType="submit" type="primary" disabled={disable}>
               Save Changes
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </div>
    </>
  );
};

export default ChangePass;
