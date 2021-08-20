import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, DatePicker, Input, Modal, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import { IRootState } from '../../../stores/store';
import './styles.scss';
import doctorAction from '../../../stores/actions/doctor.action';
import { IDoctor } from '../../../types/doctor';
import openNotification from '../../../utils/notification';
import appointmentService from '../../../services/appointment.service';
import { IUser } from '../../../types/user';
import Loading from '../../../shared/Loading';

const { Search } = Input;
const { Option } = Select;

const DoctorRow = ({ doctor, user }: { doctor: IDoctor, user: IUser }) => {
  const history = useHistory();
  const { _id, name, avatar } = doctor;
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [nameAppointment, setNameAppointment] = useState('');
  const [date, _setDate] = useState(moment(new Date(), 'YYYY/MM/DD'));
  const [selectedTime, setSelectedTime] = useState('');

  const handleModal = async () => {
    if (!nameAppointment) {
      openNotification('error', 'Please enter Appointment Name.');
      return;
    }

    setConfirmLoading(true);
    const [start, end] = selectedTime.split('-');
    const selectedDate = moment(date).format('YYYY/MM/DD');
    const startOfAppointment = moment(`${selectedDate} ${start}`).utc().format('X');
    const endOfAppointment = moment(`${selectedDate} ${end}`).utc().format('X');

    const { isExisted } = await appointmentService.checkAppointment(user._id, doctor._id, +startOfAppointment);

    if (isExisted) {
      openNotification('error', 'The time has booked by another.');
      setConfirmLoading(false);
      return;
    }

    setTimeout(() => {
      setModalVisible(false);
      setConfirmLoading(false);
      history.push({
        pathname: '/app/payment',
        state: {
          roomName: nameAppointment,
          doctorId: _id,
          doctorName: name,
          startOfAppointment,
          endOfAppointment,
          amount: doctor.consultingFee,
          time: selectedTime,
          date: selectedDate,
        },
      });
    }, 2000);
  };

  const handleCancel = () => {
    setModalVisible(false);
    history.push('/app/doctor');
  };

  const disableDate = (current: any) => {
    return current < moment().startOf('day');
  };

  return (
    <div className="doctor-card" key={_id}>
      <div className="doctor-card-left">
        <div className="doctor-card-avatar">
          <img src={avatar || '/doctorPsy.png'} alt={name} />
          <Button className="btn-detail">
            <Link to={{ pathname: `/app/doctor/${_id}/profile`, state: { doctor } }}>View Profile</Link>
          </Button>
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-name">Dr. {name}</div>
          <div className="doctor-card-description">A doctor is responsible for all sides of care of a patient. They diagnose, educate, and treat patients to ensure that they have the best possible care.</div>
        </div>
      </div>
      <div className="doctor-card-right">
        <div className="doctor-card-schedule">
          <span>Consultation Schedule</span>
          <div className="doctor-card-schedules">
            {doctor.bookingTime && doctor.bookingTime.length > 0 ? (
              doctor.bookingTime.map((time, i) => (
                <div className="doctor-schedule" key={i}>
                  <FontAwesomeIcon icon={faVideo} size="sm" />
                  <span
                    onClick={() => { setModalVisible(true); setSelectedTime(time); }}
                    onKeyPress={() => { setModalVisible(true); setSelectedTime(time); }}
                    role="button"
                    tabIndex={0}
                  >
                    {time}
                  </span>
                </div>
              ))
            ) : <div className="doctor-schedule-busy">Doctor seems to be busy</div>}
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 700 }}>Consultation Fee : {doctor?.consultingFee || 'Unknown'} VND</div>
          <div>Costs Incurred: 5$</div>
        </div>
      </div>
      <Modal
        title="Confirm to reserve this !"
        visible={modalVisible}
        centered
        onOk={() => handleModal()}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p><b>Information about your appointment:</b></p>
        <p><b>Name:</b>
          <Input
            value={nameAppointment || ''}
            placeholder="Type your appointment's name"
            type="text"
            className="nameAppointment"
            onChange={({ target: { value } }) => setNameAppointment(value)}
          />
        </p>
        <p><b>Doctor:</b>&nbsp;{name}</p>
        <p><b>Time:</b>&nbsp;{selectedTime}</p>
        <p style={{ display: 'inline-block' }}><b>Date:</b></p>&nbsp;
        <DatePicker
          style={{ display: 'inline-block' }}
          defaultValue={moment(new Date(), 'YYYY/MM/DD')}
          disabledDate={disableDate}
          format="DD/MM/YYYY"
          value={date}
        />
      </Modal>
    </div>
  );
};

const ListDoctors: React.FC = () => {
  const dispatch = useDispatch();
  const { user, doctors } = useSelector((state: IRootState) => ({
    user: state.authentication.user,
    doctors: state.doctor.doctors,
  }));
  const [listDoctors, setListDoctors] = useState(doctors || []);
  const [nameSearch, setNameSearch] = useState('');
  const [loadingApi, setLoadingApi] = useState(true);
  const [unMounted, setUnMounted] = useState(false);

  useEffect(() => {
    dispatch<any>(doctorAction.getDoctors()).then((res: any) => {
      if (!unMounted) {
        setListDoctors(res);
        setTimeout(() => setLoadingApi(false), 700);
      }
    });

    return () => {
      setUnMounted(true);
    };
  }, []);

  const handleSearch = (e: any) => {
    if (!unMounted) {
      e.preventDefault();
      const result : IDoctor[] = [];
      if (nameSearch && doctors) {
        for (let i = 0; i < doctors.length; i += 1) {
          if (((doctors[i].name).toUpperCase()).includes((nameSearch.toUpperCase()).trim())) {
            result.push(doctors[i]);
          }
        }
        setListDoctors(result);
      } else if (doctors) {
        setListDoctors(doctors);
      }

      setTimeout(() => setLoadingApi(false), 700);
    }
  };

  const handleGenderSearch = (e: any) => {
    if (!unMounted) {
      e.preventDefault();
      const gender = e.target.value;
      const result : IDoctor[] = [];
      if (gender === 'male' && doctors) {
        for (let i = 0; i < doctors.length; i += 1) {
          if (doctors[i].gender === 0) {
            result.push(doctors[i]);
          }
        }
        setListDoctors(result);
      } else if (gender === 'female' && doctors) {
        for (let i = 0; i < doctors.length; i += 1) {
          if (doctors[i].gender === 1) {
            result.push(doctors[i]);
          }
        }
        setListDoctors(result);
      } else if (gender === 'all' && doctors) {
        setListDoctors(doctors);
      }
    }
  };

  const handleMajorSearch = (e: any) => {
    if (!unMounted) {
      e.preventDefault();
      const major = e.target.value;
      const result : IDoctor[] = [];
      if (major === 'depress' && doctors) {
        for (let i = 0; i < doctors.length; i += 1) {
          if ((doctors[i].major)?.toLocaleUpperCase() === 'Depress'.toLocaleUpperCase()) {
            result.push(doctors[i]);
          }
        }
        setListDoctors(result);
      } else if (major === 'anxious' && doctors) {
        for (let i = 0; i < doctors.length; i += 1) {
          if ((doctors[i].major)?.toLocaleUpperCase() === 'Anxious'.toLocaleUpperCase()) {
            result.push(doctors[i]);
          }
        }
        setListDoctors(result);
      } else if (major === 'stress' && doctors) {
        for (let i = 0; i < doctors.length; i += 1) {
          if ((doctors[i].major)?.toLocaleUpperCase() === 'Stress'.toLocaleUpperCase()) {
            result.push(doctors[i]);
          }
        }
        setListDoctors(result);
      } else if (major === 'all' && doctors) {
        setListDoctors(doctors);
      }
    }
  };

  return (
    <div className="wrap-doctor-list">
      {
        loadingApi || !user
          ? (
            <Loading />
          ) : (
            <>
              <div className="doctor-list-content">
                <div className="doctor-filter">
                  <div className="doctor-filter-section">
                    <span>Search Name: </span>
                    <Search
                      prefix={<UserOutlined />}
                      className="doctor-search"
                      value={nameSearch || ''}
                      onChange={({ target: { value } }) => setNameSearch(value)}
                      onKeyUp={handleSearch}
                      placeholder="Type doctor's name"
                    />
                  </div>
                  <div className="doctor-filter-section">
                    <span style={{ display: 'block' }}>Major</span>
                    <Select id="doctor-specialty">
                      <Option value="all">All</Option>
                      <Option value="depress">Depress</Option>
                      <Option value="anxious">Anxious</Option>
                      <Option value="stress">Stress</Option>
                    </Select>
                  </div>
                  <div className="doctor-filter-section">
                    <span style={{ display: 'block' }}>Gender</span>
                    <Select id="doctor-gender">
                      <Option value="all">All</Option>
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                    </Select>
                  </div>
                </div>
                { listDoctors && listDoctors.map((doctor: any, i) => <DoctorRow key={i} doctor={doctor} user={user} />)}
              </div>
              <div className="doctor-top-list">
                <div className="doctor-top-title">Top 5:</div>
                {
                  !listDoctors
                    ? (<></>)
                    : (doctors || []).slice(0, 5).map(({ _id, name, avatar, email }: any) => (
                      <div className="doctor-top-content" key={_id}>
                        <div className="doctor-content-avatar">
                          {avatar ? <img src={avatar} alt={name} /> : <img src="/doctorPsy.png" alt={name} />}
                        </div>
                        <div className="doctor-content-details">
                          <div>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</div>
                          <div className="doctor-content-name">Dr. {name}</div>
                          <div>{email}</div>
                        </div>
                      </div>
                    ))
                }
              </div>
            </>
          )
      }
    </div>
  );
};

export default ListDoctors;
