import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IRootState } from '../../../stores/store';
import './styles.scss';
import doctorAction from '../../../stores/actions/doctor.action';
import scheduleAction from '../../../stores/actions/schedule.action';
import { ISchedule } from '../../../types/schedule';
import { IDoctor } from '../../../types/doctor';

const { Search } = Input;

const DoctorRow = (props: any) => {
  const dispatch = useDispatch();
  const { doctor } = props;
  const { _id, name, avatar } = doctor;
  const [listSchedule, setListSchedule] = useState<ISchedule[] | undefined>();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [nameAppointment, setNameAppointment] = useState('');
  const history = useHistory();

  const makeAnAppointment = () => {
    setVisible(true);
  };

  const handleOk = (id: string, fromTime: number, toTime: number) => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      history.push({
        pathname: '/app/payment',
        state: {
          idSchedule: id,
          nameRoom: nameAppointment,
          doctorId: _id,
          doctorName: name,
          startOfAppointment: fromTime,
          endOfAppointment: toTime,
        },
      });
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
    history.push('/app/doctor');
  };

  useEffect(() => {
    dispatch<any>(scheduleAction.getSchedules(_id)).then((res: any) => setListSchedule(res));
  }, []);

  return (
    <div className="doctor-card" key={_id}>
      <div className="doctor-card-left">
        <div className="doctor-card-avatar">
          {avatar ? <img src={avatar} alt={name} /> : <img src="/doctorPsy.png" alt={name} />}
          <Button className="btn-detail">
            <Link to={`/app/doctor/${_id}/detail`}>View details</Link>
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
            {listSchedule && listSchedule.length > 0 ? (
              listSchedule.map((schedule, i) => (
                <div className="doctor-schedule" key={i}>
                  <FontAwesomeIcon icon={faVideo} size="sm" />
                  <span
                    onClick={() => makeAnAppointment()}
                    onKeyPress={() => makeAnAppointment()}
                    role="button"
                    tabIndex={0}
                  >{new Date(schedule.fromTime).toLocaleString()} - {new Date(schedule.toTime).toLocaleString()}
                  </span>
                  <Modal
                    title="Confirm to reserve this !"
                    visible={visible}
                    onOk={() => handleOk(schedule._id, schedule.fromTime, schedule.toTime)}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                  >
                    <p><b>Information about your appointment:</b></p>
                    <p><b>Doctor:</b> {name}</p>
                    <p><b>Time start:</b> {new Date(schedule.fromTime).toLocaleString()}</p>
                    <p><b>Time end:</b> {new Date(schedule.toTime).toLocaleString()}</p>
                    <Input value={nameAppointment || ''} placeholder="Type your appointment's name" type="text" className="nameAppointment" onChange={({ target: { value } }) => setNameAppointment(value)} />
                  </Modal>
                </div>
              ))
            ) : <div className="doctor-schedule-busy">Doctor seems to be busy for the next 24 hours</div>}
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 700 }}>Consultation Fee : 50$</div>
          <div>Costs Incurred: 5$</div>
        </div>
      </div>
    </div>
  );
};

const ListDoctors: React.FC = () => {
  const dispatch = useDispatch();
  const { user, doctors } = useSelector((state: IRootState) => ({
    user: state.authentication.user,
    doctors: state.doctor.doctors,
  }));
  const [listDoctors, setListDoctors] = useState(doctors);
  const [nameSearch, setNameSearch] = useState('');
  const [genderSearch, setGenderSearch] = useState('all');

  const handleSearch = (e: any) => {
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
  };
  const handleSearchGender = () => {
    const result : IDoctor[] = [];
    console.log(genderSearch);
    if (genderSearch === 'male' && doctors) {
      for (let i = 0; i < doctors.length; i += 1) {
        if (doctors[i].gender === '0') {
          result.push(doctors[i]);
        }
      }
      setListDoctors(result);
    } else if (genderSearch === 'female' && doctors) {
      for (let i = 0; i < doctors.length; i += 1) {
        if (doctors[i].gender === '1') {
          result.push(doctors[i]);
        }
      }
      setListDoctors(result);
    } else if (genderSearch === 'all' && doctors) {
      setListDoctors(doctors);
    }
  };

  useEffect(() => {
    if (user) {
      dispatch<any>(doctorAction.getDoctors()).then((res: any) => {
        setListDoctors(res);
      });
    }
  }, []);
  useEffect(() => {
    handleSearchGender();
  }, [genderSearch]);

  return (
    <div className="wrap-doctor-list">
      <div className="doctor-list-content">
        <div className="doctor-filter">
          <div className="doctor-filter-section">
            <span>Search Name: </span>
            <Search
              prefix={<UserOutlined />}
              className="doctor-search"
              value={nameSearch || ''}
              onChange={({ target: { value } }) => setNameSearch(value)}
              onKeyUp={(e) => (handleSearch(e))}
              placeholder="Type doctor's name"
            />
          </div>
          <div className="doctor-filter-section">
            <span>Major</span>
            <select name="specialty" id="doctor-specialty">
              <option value="all">All</option>
              <option value="a">A</option>
              <option value="b">B</option>
            </select>
          </div>
          <div className="doctor-filter-section">
            <span>Gender</span>
            <select
              name="gender"
              id="doctor-gender"
              onChange={({ target: { value } }) => setGenderSearch(value)}
              value={genderSearch}
            >
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        {(listDoctors || []).map((doctor: any, i) => <DoctorRow key={i} doctor={doctor} />)}
      </div>
      <div className="doctor-top-list">
        <div className="doctor-top-title">Top 5:</div>
        {
          !doctors
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
    </div>
  );
};

export default ListDoctors;
