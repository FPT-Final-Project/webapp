import { Table, Space, Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import { IRootState } from '../../stores/store';
import appointmentAction from '../../stores/actions/appointment.action';
import './styles.scss';
import Loading from '../../shared/Loading';

const { confirm } = Modal;

const Appointment: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = queryString.parse(window.location.href);
  const [unMounted, setUnMounted] = useState(false);
  const [loadingApi, setLoadingApi] = useState(true);
  const { user, appointments } = useSelector((state: IRootState) => ({
    user: state.authentication.user,
    appointments: state.appointment.appointments,
  }));
  const [data, setData] = useState(appointments);

  const cancelAppointment = (appointmentId : string) => {
    confirm({
      title: 'Do you want to cancel this appointment ?',
      icon: <ExclamationCircleOutlined />,
      content: 'If you agree to cancel this appointment you will lose your paid',
      onOk() {
        dispatch<any>(appointmentAction.cancelAppointment(appointmentId));
      },
      onCancel() {
        history.push('/app/appointment');
      },
    });
  };

  useEffect(() => {
    if (params.message === 'Success' && params.errorCode === '0' && typeof params.extraData === 'string') {
      const [
        appointmentName,
        patientId,
        patientName,
        startOfAppointment,
        endOfAppointment,
        doctorId,
        doctorName,
      ] = params.extraData?.split(',');

      dispatch<any>(
        appointmentAction.createAppointment(
          patientId,
          patientName,
          appointmentName,
          +startOfAppointment,
          +endOfAppointment,
          doctorId,
          doctorName,
        ),
      ).then(
        dispatch<any>(appointmentAction.getAppointments()).then((res:any) => {
          if (!unMounted) {
            setData(res);
            setTimeout(() => setLoadingApi(false), 700);
          }
        }),
      );
    }

    dispatch<any>(appointmentAction.getAppointments()).then((res:any) => {
      if (!unMounted) {
        setData(res);
        setTimeout(() => setLoadingApi(false), 700);
      }
    });

    return () => {
      setUnMounted(true);
    };
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
      render: (startOfAppointment: string) => moment(startOfAppointment, 'X').format('DD/MM/YYYY HH:mm'),
    },
    {
      title: 'Time close',
      dataIndex: 'endOfAppointment',
      key: 'endOfAppointment',
      sorter: (a: any, b: any) => (a.endOfAppointment - b.endOfAppointment),
      render: (endOfAppointment: string) => moment(endOfAppointment, 'X').format('DD/MM/YYYY HH:mm'),
    },
    {
      title: 'Action',
      key: 'action',
      data: '',
      render: (_data: any, row: any) => {
        const now = moment().format('X');

        if (now >= row.startOfAppointment && now <= row.endOfAppointment) {
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
    <div style={{ height: '100%' }}>
      {
        loadingApi
          ? (
            <Loading />
          ) : (
            <div className="wrap-aptm">
              <Table columns={columns} dataSource={data} rowKey="_id" />
            </div>
          )
      }
    </div>
  );
};

export default Appointment;
