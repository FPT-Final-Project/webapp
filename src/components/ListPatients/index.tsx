import React from 'react';
import { Table, Space, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

interface Props {}

const ListPatients: React.FC<Props> = () => {
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
      render: (text: any, record : any) => {
        // console.log('tên nè',params);
        return (
          <div className="userEmail">
            <span>{record.name}</span>
            <span> {record.email}</span>
          </div>
        );
      },
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },

    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Occupation',
      dataIndex: 'occupation',
      key: 'occupation',
    },

    {
      title: 'Settings',
      key: 'settings',
      render: () => (
        <Space size="middle">
          <Button type="primary"><EditOutlined />Edit</Button>
          {/* <Divider type="vertical"></Divider> */}
          <Button type="default" danger><DeleteOutlined />Delete</Button>
        </Space>
      ),
    },
  ];

  const datas = [
    {
      key: '1',
      id: 13,
      name: 'Ngô Hoàng Thế Duy',
      email: 'maicels@psycare.com',
      phone: '0905619755',
      gender: 'Male',
      age: 25,
      occupation: 'Teacher',
    },
    {
      key: '2',
      id: 33,
      name: 'Jim Green',
      email: 'maicels@psycare.com',
      phone: '0905213551',
      gender: 'Female',
      age: 28,
      occupation: 'Maketer',
    },
    {
      key: '3',
      id: 15,
      name: 'Joe Black',
      email: 'maicels@psycare.com',
      phone: '0905619225',
      gender: 'Male',
      age: 35,
      occupation: 'Teacher',

    },
    {
      key: '4',
      id: 53,
      name: 'John Brown',
      email: 'maicels@psycare.com',
      phone: '0905619755',
      gender: 'Male',
      age: 20,
      occupation: 'Student',
    },
    {
      key: '5',
      id: 65,
      name: 'Jim Green',
      email: 'maicels@psycare.com',
      phone: '0905213551',
      gender: 'Female',
      age: 30,
      occupation: 'Bussiness',
    },
    {
      key: '6',
      id: 44,
      name: 'Joe Black',
      email: 'maicels@psycare.com',
      phone: '0905619225',
      gender: 'Male',
      age: 25,
      occupation: 'Teacher',

    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={datas} />

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

export default ListPatients;
