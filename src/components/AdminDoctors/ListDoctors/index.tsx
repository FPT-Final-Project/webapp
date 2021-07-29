import { Table, Tag, Space, Button } from 'antd';
import './styles.scss';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ListDoctors = () => {
  const [data, setData] = useState([
    {
      key: '1',
      id: 13,
      name: 'Ngô Hoàng Thế Duy',
      email: 'maicels@psycare.com',
      phone: '0905619755',
      specialist: 'Stress',
      schedule: 'New York No. 1 Lake Park',
      appointment: '1 Appointment',
      status: 'Online',
    },
    {
      key: '2',
      id: 33,
      name: 'Jim Green',
      email: 'maicels@psycare.com',
      phone: '0905213551',
      specialist: 'Depression',
      schedule: 'London No. 1 Lake Park',
      appointment: 'No Appointment',
      status: 'Offline',
    },
    {
      key: '3',
      id: 15,
      name: 'Joe Black',
      email: 'maicels@psycare.com',
      phone: '0905619225',
      specialist: 'Anxious',
      schedule: 'Sidney No. 1 Lake Park',
      appointment: '2 Appointments',
      status: 'Online',
    },
    {
      key: '4',
      id: 53,
      name: 'John Brown',
      email: 'maicels@psycare.com',
      phone: '0905619755',
      specialist: 'Stress',
      schedule: 'New York No. 1 Lake Park',
      appointment: '1 Appointment',
      status: 'Online',
    },
    {
      key: '5',
      id: 65,
      name: 'Jim Green',
      email: 'maicels@psycare.com',
      phone: '0905213551',
      specialist: 'Stress',
      schedule: 'London No. 1 Lake Park',
      appointment: 'No Appointment',
      status: 'Offline',
    },
    {
      key: '6',
      id: 44,
      name: 'Joe Black',
      email: 'maicels@psycare.com',
      phone: '0905619225',
      specialist: 'Anxious',
      schedule: 'Sidney No. 1 Lake Park',
      appointment: '5 Appointments',
      // status: ['Offline'],
      status: 'Offline',

    },
  ]);

  const handleDelete = (id : number | string) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any, record : any) => (
        <div className="userEmail">
          <span>{record.name}</span>
          <span> {record.email}</span>
        </div>
      ),
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Specialist',
      dataIndex: 'specialist',
      key: 'specialist',
    },
    {
      title: 'Schedule',
      dataIndex: 'schedule',
      key: 'schedule',
    },
    {
      title: 'Appointment',
      key: 'appointment',
      dataIndex: 'appointment',
      render: (app: string) => {
        const color = app === 'No Appointment' ? 'grey' : 'green';
        return (
          <Tag color={color}>
            {app}
          </Tag>
        );
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',

      render: (status: string) => {
        const color = status === 'Online' ? 'green' : 'volcano';
        return (
          <Tag color={color}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: 'Settings',
      key: 'settings',
      render: (text : any, record: any) => (
        <Space size="middle">
          <Link to={`/app/doctor/${record.id}`}>
            <Button type="primary"><EditOutlined />Edit</Button>
          </Link>

          {/* <Divider type="vertical"></Divider> */}
          <Button type="default" danger onClick={() => handleDelete(record.id)}><DeleteOutlined />Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="doctor-list">
      <Table columns={columns} dataSource={data} />

      {/* <Select  style={{ width: 200, border: 0 }}  >
            <OptGroup label="Manager">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </OptGroup>
            <OptGroup label="Engineer">
              <Option value="Yiminghe">yiminghe</Option>
            </OptGroup>
          </Select> */}

    </div>
  );
};

export default ListDoctors;
