/* eslint-disable max-len */
/* eslint-disable import/order */
import React, { useState } from 'react';
import { Form, Input, Button, TimePicker } from 'antd';
import './style.scss';
import { EditOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../stores/store';
import authAction from '../../../stores/actions/auth.action';
import moment from 'moment';

const ProfileDoctor = () => {
  const [editable, setEditable] = useState(true);
  const [creatable, setCreatable] = useState(false);
  const dispatch = useDispatch();

  const { user } = useSelector((state : IRootState) => state.authentication);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinishEdit = ({ id, name, job, gender, phone, address, avatar, specialist } : {id: string, name: string, job: string, gender: string, phone: string, address: string, avatar: string, specialist: string}) => {
    dispatch(authAction.updateUser(id, name, job, gender, phone, address, avatar, specialist));
    setEditable(!editable);
  };

  const onFinishSchedule = () => {
    setCreatable(!creatable);
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
                    <button className="btn-edit-info" onClick={() => { setEditable(!editable); console.log(editable); setCreatable(false); console.log(creatable); }}>
                      <EditOutlined className="editbtn_info" /> Edit Profile
                    </button>
                    <button className="btn-schedule-info" onClick={() => { setCreatable(!creatable); console.log(creatable); setEditable(true); console.log(editable); }}>
                      <VideoCameraOutlined /> Create Schedule
                    </button>
                  </div>
                </div>
                <div className="wrap-block-info">
                  <div className="profile-title">My Profile</div>
                  <div className="block-info infoEmail">
                    <div className="wrap-info line">
                      <div className="info__title">Specialist</div>
                      <div className="infoEmail__text">{user?.specialist}Dpression</div>
                    </div>
                    <div className="wrap-info line">
                      <div className="info__title">Email</div>
                      <div className="infoEmail__text">{user?.email}</div>
                    </div>
                  </div>
                  <div className="block-info infoPhone">
                    <div className="wrap-info line">
                      <div className="info__title">Gender</div>
                      <div className="infoEmail__text">{user?.gender}</div>
                    </div>
                    <div className="wrap-info line">
                      <div className="info__title">Phone</div>
                      <div className="infoEmail__text">{user?.phone}55555</div>
                    </div>
                  </div>
                </div>
              </div>
            )
            : (
              <div className="container">

                <Form {...layout} name="nest-messages" onFinish={onFinishEdit}>

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
                      >
                        <Input />

                      </Form.Item>
                      <Form.Item
                        name="specialist"
                        label="Specialist: "
                        initialValue={user?.specialist ? user?.specialist : 'unknow'}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="gender"
                        label="Gender: "
                        initialValue={user?.gender ? user?.gender : 'unknow'}

                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="address"
                        label="Address: "
                        initialValue={user?.address ? user?.address : 'unknow'}

                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="email"
                        label="Email: "
                        initialValue={user?.email}
                      >
                        <Input readOnly />
                      </Form.Item>
                      <Form.Item
                        name="phone"
                        label="Phone: "
                        initialValue={user?.phone ? user?.phone : 'unknow'}

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
          {creatable
            ? (
              <div className="container schedule">

                <Form {...layout} name="nest-messages" onFinish={onFinishSchedule}>

                  <div className="title-top">Create Schedule</div>
                  <div className="form-item">
                    <div className="divide divide-right">

                      <Form.Item
                        name="gender"
                        label="Time Open: "
                      />
                      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />

                      <Form.Item
                        name="address"
                        label="Time Close: "
                      />
                      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />

                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          {creatable ? 'Create' : ''}
                        </Button>
                      </Form.Item>
                    </div>
                  </div>
                </Form>
              </div>
            ) : '' }
        </div>
      </div>
    </div>
  );
};

export default ProfileDoctor;
