import { Table } from 'antd';
import React, { useState } from 'react';

interface Props {}

const Appointment: React.FC<Props> = () => {
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Viet',
      phone: '0775530555',
      email: 'vietnp14@gmail.com',
    },
  ]);

  const columns = [
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
  ];

  return (
    <div>
      <div className="">
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
    </div>
  );
};

export default Appointment;
