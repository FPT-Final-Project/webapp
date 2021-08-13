/* eslint-disable jsx-a11y/label-has-associated-control */
import { EditOutlined, LoadingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Menu, Upload, Dropdown, Image, Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImgCrop from 'antd-img-crop';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import authAction from '../../../stores/actions/auth.action';
import { IRootState } from '../../../stores/store';
import { IUser } from '../../../types/user';
import './style.scss';

const { Option } = Select;
interface Props {
  user: IUser | undefined;
}

const ProfileUser: React.FC<Props> = () => {
  const [editable, setEditable] = useState(true);

  const dispatch = useDispatch();

  const { user } = useSelector((state : IRootState) => state.authentication);
  const [loading, setLoading] = useState(false);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {
    dispatch<any>(authAction.updateUser(values)).then(() => { dispatch(authAction.getMe()); });
    setEditable(!editable);
  };
  // const handleChange = (info: any) => {
  //   getBase64(info.file.originFileObj, (imageUrl: any) => setUserAvatar(imageUrl));
  // };
  const uploadImage = (options: any) => {
    setLoading(true);
    const { file } = options;
    const fmData = new FormData();
    fmData.append('image', file);
    dispatch<any>(authAction.uploadImage(fmData)).then((res: any) => {
      if (res) {
        setLoading(false);
        dispatch(authAction.updateAvatar(res));
      }
    });
  };
  const uploadButton = (
    <>
      <LoadingOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </>
  );
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <ImgCrop grid>
          <Upload
            name="avatar"
            customRequest={uploadImage}
            className="avatar-uploader"
            showUploadList={false}
          >
            <>
              <FontAwesomeIcon icon={faUpload} />
              <span>&nbsp;Upload Avatar</span>
            </>
          </Upload>
        </ImgCrop>
      </Menu.Item>
    </Menu>
  );

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
                  <Dropdown
                    overlay={menu}
                    trigger={['click']}
                    placement="bottomCenter"
                    className="image-upload"
                  >
                    {!loading ? <Image src={user?.avatar || '/avatarDefault.png'} preview={false} /> : uploadButton}

                  </Dropdown>
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
                      <div className="infoEmail__text">{user?.job || 'Unemployee'}</div>
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
                        initialValue={user?.job}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="gender"
                        label="Gender: "
                        initialValue={user?.gender || 'Unknown'}

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
                        initialValue={user?.address || 'Unknown'}

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
                        initialValue={user?.phone || 'Unknown'}

                      >
                        <Input />
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          {editable ? '' : 'Update'}
                        </Button>
                        <Button htmlType="button" style={{ margin: '0 8px' }} onClick={() => setEditable(!editable)}>
                          Cancel
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
