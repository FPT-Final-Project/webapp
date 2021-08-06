/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { EditOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import authAction from '../../../stores/actions/auth.action';
import { IRootState } from '../../../stores/store';
import { IUser } from '../../../types/user';
import './style.scss';

interface Props {
  user: IUser | undefined;
}

const ProfileUser: React.FC<Props> = () => {
  const [editable, setEditable] = useState(true);

  const dispatch = useDispatch();

  const { user } = useSelector((state : IRootState) => state.authentication);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */

  const onFinish = ({ id, name, job, gender, phone, address, avatar, specialist } : {id: string, name: string, job: string, gender: string, phone: string, address: string, avatar: string, specialist: string}) => {
    // console.log(name);
    dispatch(authAction.updateUser(id, name, job, gender, phone, address, avatar, specialist));
    setEditable(!editable);
  };

  return (
    <div className="wrap-content">
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
                    {user?.name}
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
                      <div className="info__title">Career</div>
                      <div className="infoEmail__text">{user?.job}Home</div>
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
                      >
                        <Input />

                      </Form.Item>
                      <Form.Item
                        name="job"
                        label="Job: "
                        initialValue={user?.job ? user?.job : 'unknow'}
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
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
