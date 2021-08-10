/* eslint-disable max-len */
/* eslint-disable import/order */
import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import './style.scss';
import { EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../stores/store';
import authAction from '../../../stores/actions/auth.action';

const { Option } = Select;

const ProfileDoctor: React.FC = () => {
  const [editable, setEditable] = useState(true);

  const dispatch = useDispatch();

  const { user } = useSelector((state : IRootState) => state.authentication);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {
    dispatch<any>(authAction.updateUser(values)).then(() => { dispatch(authAction.getMe()); });
    setEditable(!editable);
  };

  return (
    <div className="wrap-content">
      {/* root */}
      <div className="root" />
      <div className="headerProfile">
        <div className="headerProfile__banner" />
        <div className="wrap-mid">
          {editable
            ? (
              <div className="headerProfile__info">
                <div className="info info__image">
                  <div className="info__image--transform" />
                  <div className="info__image--name">
                    Dr. {user?.name}
                  </div>
                  <div className="info__image--email">
                    {user?.email}
                  </div>
                  <div className="btnEdit-wrap">
                    <button className="btn-edit-info" onClick={() => setEditable(!editable)}>
                      <EditOutlined className="editbtn_info" /> Edit Profile
                    </button>
                  </div>
                </div>
                <div className="wrap-block-info">
                  <div className="profile-title">My Profile</div>
                  <div className="block-info infoEmail">
                    <div className="wrap-info line">
                      <div className="info__title">Major</div>
                      <div className="infoEmail__text">{user?.major}</div>
                    </div>
                    <div className="wrap-info line">
                      <div className="info__title">Email</div>
                      <div className="infoEmail__text">{user?.email}</div>
                    </div>
                  </div>
                  <div className="block-info infoPhone">
                    <div className="wrap-info line">
                      <div className="info__title">Gender</div>
                      <div className="infoEmail__text">{user?.gender === '0' ? 'Male' : 'Female'}</div>
                    </div>
                    <div className="wrap-info line">
                      <div className="info__title">Phone</div>
                      <div className="infoEmail__text">{user?.phone || 'Unknown'}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
            : (
              <div className="container">

                <Form {...layout} name="nest-messages" onFinish={onFinish}>

                  <div className="title-top">Edit My Profile</div>
                  <div className="container__title">
                    <div className="container__title--text">Personal Information</div>
                    <div className="container__title--btn" />
                  </div>
                  <div className="form-item">

                    <div className="divide divide-left">
                      <div className="image-profile" />
                      <button className="divide-left__edit"><EditOutlined className="editbtn_below" /></button>

                    </div>
                    <div className="divide divide-right">

                      <Form.Item
                        name="name"
                        label="Name: "
                        initialValue={user?.name}
                        rules={[{ required: true }]}
                      >
                        <Input />

                      </Form.Item>
                      <Form.Item
                        name="major"
                        label="Major: "
                        initialValue={user?.major ? user?.major : 'unknow'}
                        rules={[{ required: true }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="gender"
                        label="Gender: "
                        initialValue={user?.gender ? user?.gender : 'unknow'}
                        rules={[{ required: true }]}
                      >
                        <Select
                          allowClear
                        >
                          <Option value="0">male</Option>
                          <Option value="1">female</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        name="address"
                        label="Address: "
                        initialValue={user?.address ? user?.address : 'unknow'}
                        rules={[{ required: true }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="email"
                        label=" Email:"
                        initialValue={user?.email}
                        rules={[{ required: true }]}
                      >
                        <Input
                          disabled
                        />
                      </Form.Item>
                      <Form.Item
                        name="phone"
                        label="Phone: "
                        initialValue={user?.phone ? user?.phone : 'unknow'}
                        rules={[{ required: true }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          {editable ? '' : 'Update'}
                        </Button>
                      </Form.Item>
                    </div>
                  </div>
                </Form>

              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDoctor;
