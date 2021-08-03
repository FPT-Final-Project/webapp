/* eslint-disable no-unused-expressions */
import { Table, Space, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { IRootState } from '../../stores/store';
import appointmentAction from '../../stores/actions/appointment.action';
import './styles.scss';

const Appointment: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: IRootState) => state.authentication.user);
  const appointments = useSelector((state: IRootState) => state.appointment.appointments);
  useEffect(() => {
    console.log(user?._id);
    if (user) {
      dispatch(appointmentAction.getAppointments(user));
    }
  }, []);
  const [data, setData] = useState(appointments);

  const columns = [
    {
      title: "Room's ID",
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: "Room's Name",
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: "Partner's Name",
      dataIndex: user?.role === 'doctor' ? 'patientName' : 'doctorName',
      key: 'partnetName',
    },
    {
      title: 'Time open',
      dataIndex: 'startOfAppointment',
      render: (startOfAppointment: string) => {
        const d = new Date(startOfAppointment);
        return new Date(d).toLocaleString();
      },
      // sorter: (a: any, b: any) => {
      //   parseFloat(a.startOfAppointment) - parseFloat(b.startOfAppointment);
      // },
    },
    {
      title: 'Time close',
      dataIndex: 'endOfAppointment',
      key: 'endOfAppointment',
      render: (endOfAppointment: string) => {
        const d = new Date(endOfAppointment);
        return new Date(d).toLocaleString();
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button disabled>Join</Button>
          <Button>Cancel</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className="wrap-aptm">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Appointment;
