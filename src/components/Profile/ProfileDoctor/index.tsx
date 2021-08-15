import { Form, Input, Button, Select, Upload, Dropdown, Image, Menu, Popover } from 'antd';
import './style.scss';
import { EditOutlined, LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import ImgCrop from 'antd-img-crop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { IRootState } from '../../../stores/store';
import authAction from '../../../stores/actions/auth.action';

import openNotification from '../../../utils/notification';

const { Option } = Select;

interface Props {
  bookingTime: string[];
  onBookTimeChange: any;
  onClose: any;
}

const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const minutes = [0, 50];
const timeValues = hours.map((hour) => `${hour}:${minutes[0]}0 - ${hour}:${minutes[1]}`);

const PopoverContent = ({ bookingTime, onBookTimeChange, onClose }: Props) => (
  <>
    <a style={{ display: 'block', right: 0 }} onClick={onClose}>Close</a>
    <Select defaultValue={timeValues[0]} style={{ width: '120px' }} onChange={onBookTimeChange}>
      {
        timeValues
          .map((value: any) => {
            return (<Option key={value} disabled={bookingTime.includes(value)} value={value}>{value}</Option>);
          })
      }
    </Select>
  </>
);

const ProfileDoctor: React.FC = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [editable, setEditable] = useState(false);

  const { user } = useSelector((state : IRootState) => state.authentication);
  const [loading, setLoading] = useState(false);
  if (!user) {
    return (<></>);
  }

  const [bookingTime, setBookingTime] = useState(user?.bookingTime || []);

  useEffect(() => {
    dispatch(authAction.updateBookingTime(bookingTime));
  }, [bookingTime]);

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
            // onChange={handleChange}
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

  const onClose = () => {
    setVisible(!visible);
  };

  const removeTime = (time: string) => {
    setBookingTime(bookingTime.filter((t) => t !== time));
  };

  const onBookTimeChange = (value: string) => {
    setVisible(!visible);
    if (bookingTime.includes(value)) {
      openNotification('error', 'You wanna try again.');
      return;
    }

    if (bookingTime.length + 1 > 4) {
      openNotification('error', 'Booking Time is not more than 4.');
      return;
    }

    setBookingTime(bookingTime.concat(value));
    openNotification('success', 'Add successfully.');
  };

  return (
    <div className="wrap-content">
      {/* root */}
      <div className="headerProfile">
        <div className="headerProfile__banner" />
        <div className="wrap-mid">
          {
            !editable ? (
              <div className="headerProfile__info">
                <div className="info info__image">
                  <Dropdown
                    overlay={menu}
                    trigger={['click']}
                    placement="bottomCenter"
                    className="image-upload"
                  >
                    {!loading ? <Image src={user?.avatar || './doctorPsy'} preview={false} /> : uploadButton}

                  </Dropdown>
                  <div className="info__image--name">
                    Dr. {user?.name}
                  </div>
                  <div className="info__image--email">
                    {user?.email}
                  </div>
                  <div className="btnEdit-wrap">
                    <button className="btn-edit-info" onClick={() => setEditable(true)}>
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
                  <div className="block-info infoPhone">
                    <div className="wrap-info line" style={{ width: '100%', marginRight: '10px' }}>
                      <div className="info__title">Booking Time</div>
                      <div className="infoEmail__text">
                        {bookingTime.map((time) => (
                          <div style={{ display: 'inline-block', marginRight: '15px', cursor: 'pointer' }}>
                            <Button key={time} style={{ marginRight: '5px', marginBottom: '10px' }}>{time}</Button>
                            <FontAwesomeIcon icon={faWindowClose} onClick={() => removeTime(time)} />
                          </div>
                        ))}
                        <Popover
                          trigger="click"
                          visible={visible}
                          content={(
                            <PopoverContent
                              bookingTime={bookingTime}
                              onBookTimeChange={onBookTimeChange}
                              onClose={onClose}
                            />
                          )}
                        >
                          <Button className="btn-schedule-info" onClick={() => setVisible(!visible)}> + Add</Button>
                        </Popover>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
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
                        rules={[{ required: true }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="major"
                        label="Major: "
                        initialValue={user?.major ? user?.major : 'unknown'}
                        rules={[{ required: true }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="gender"
                        label="Gender: "
                        initialValue={user?.gender ? user?.gender : 'unknown'}
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
                        initialValue={user?.address ? user?.address : 'unknown'}
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
                        initialValue={user?.phone ? user?.phone : 'unknown'}
                        rules={[{ required: true }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          Update
                        </Button>
                        <Button htmlType="button" style={{ margin: '0 8px' }} onClick={() => setEditable(!editable)}>
                          Cancel
                        </Button>
                      </Form.Item>
                    </div>
                  </div>
                </Form>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ProfileDoctor;
