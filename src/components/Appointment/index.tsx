import { Table, Space, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { IRootState } from '../../stores/store';
import appointmentAction from '../../stores/actions/appointment.action';
import './styles.scss';

const Appointment: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, appointments } = useSelector((state: IRootState) => ({
    user: state.authentication.user,
    appointments: state.appointment.appointments,
  }));
  const [data, setData] = useState(appointments);

  const cancelAppointment = (appointmentId : string) => {
    if (user) {
      confirmAlert({
        title: 'Confirm to cancel this appointment !',
        message: 'If you agree to cancel this appointment you will lose your paid',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              dispatch<any>(appointmentAction.cancelAppointment(user, appointmentId)).then((res:any) => {
                setData(res);
              });
            },
          },
          {
            label: 'No',
            onClick: () => history.push('/app/appointment'),
          },
        ],
      });
    }
  };

  useEffect(() => {
    if (user) {
      dispatch<any>(appointmentAction.getAppointments(user)).then((res:any) => {
        setData(res);
      });
    }
  }, []);

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
      key: 'startOfAppointment',
      sorter: (a: any, b: any) => (a.startOfAppointment - b.startOfAppointment),
      render: (startOfAppointment: string) => {
        const d = new Date(startOfAppointment);
        return new Date(d).toLocaleString();
      },
    },
    {
      title: 'Time close',
      dataIndex: 'endOfAppointment',
      key: 'endOfAppointment',
      sorter: (a: any, b: any) => (a.endOfAppointment - b.endOfAppointment),
      render: (endOfAppointment: string) => {
        const d = new Date(endOfAppointment);
        return new Date(d).toLocaleString();
      },
    },
    {
      title: 'Action',
      key: 'action',
      data: '',
      render: (_data: any, row: any) => {
        const d = new Date();
        const n = d.getTime();
        if (n >= Number(row.startOfAppointment) && n <= Number(row.endOfAppointment)) {
          return (
            <Space size="middle">
              <Link
                to={{
                  pathname: `/appointment/${row._id}/start`,
                }}
              >
                <Button>Join</Button>
              </Link>
              {user?.role === 'patient' ? (<Button className="buttonDisable" disabled>Cancel<span className="tooltiptext">Appointment is in progress</span></Button>) : ''}
            </Space>
          );
        }
        return (
          <Space size="middle">
            <Button className="buttonDisable" disabled>Join
              <span className="tooltiptext">Please comeback on time</span>
            </Button>
            {user?.role === 'patient' ? (<Button onClick={() => cancelAppointment(row._id)}>Cancel</Button>) : ''}
          </Space>
        );
      },
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
