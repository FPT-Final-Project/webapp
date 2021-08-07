import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { IRootState } from '../../../stores/store';
import './styles.scss';
import doctorAction from '../../../stores/actions/doctor.action';
import scheduleAction from '../../../stores/actions/schedule.action';
import { ISchedule } from '../../../types/schedule';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { IDoctor } from '../../../types/doctor';

const { Search } = Input;

const DoctorRow = (props: any) => {
  const dispatch = useDispatch();
  const { doctor } = props;
  const { _id, name, avatar } = doctor;
  const [listSchedule, setListSchedule] = useState<ISchedule[] | undefined>();
  const history = useHistory();

  const makeAnAppointment = (id: string, fromTime: number, toTime: number) => {
    const from = new Date(fromTime).toLocaleString();
    const to = new Date(toTime).toLocaleString();
    confirmAlert({
      title: 'Confirm to reserve this',
      message: `Information about this appointment:
      Doctor: ${name}
      , From: ${from} To: ${to}
      , Fee: 50$`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            history.push({
              pathname: '/app/payment',
              state: {
                idSchedule: id,
                doctorId: _id,
                doctorName: name,
                startOfAppointment: fromTime,
                endOfAppointment: toTime,
              },
            });
          },
        },
        {
          label: 'No',
          onClick: () => history.push('/app/doctor'),
        },
      ],
    });
  };

  useEffect(() => {
    dispatch<any>(scheduleAction.getSchedules(_id)).then((res: any) => setListSchedule(res));
  }, []);

  return (
    <div className="doctor-card" key={_id}>
      <div className="doctor-card-left">
        <div className="doctor-card-avatar">
          <img src={avatar} alt={name} />
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
            {listSchedule ? (
              listSchedule.map((schedule, i) => (
                <div className="doctor-schedule" key={i}>
                  <FontAwesomeIcon icon={faVideo} size="sm" />
                  <span
                    onClick={() => makeAnAppointment(schedule._id, schedule.fromTime, schedule.toTime)}
                    onKeyPress={() => makeAnAppointment(schedule._id, schedule.fromTime, schedule.toTime)}
                    role="button"
                    tabIndex={0}
                  >{new Date(schedule.fromTime).toLocaleString()} - {new Date(schedule.toTime).toLocaleString()}
                  </span>
                </div>
              ))
            ) : ''}
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

  const handleSearch = (e: any) => {
    e.preventDefault();
    const result : IDoctor[] = [];
    if (nameSearch && listDoctors) {
      for (let i = 0; i < listDoctors.length; i += 1) {
        if (((listDoctors[i].name).toUpperCase()).includes(nameSearch.toUpperCase())) {
          result.push(listDoctors[i]);
        }
      }
      setListDoctors(result);
    } else if (listDoctors) {
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
            <span>Specialty</span>
            <select name="specialty" id="doctor-specialty">
              <option value="all">All</option>
              <option value="a">A</option>
              <option value="b">B</option>
            </select>
          </div>
          <div className="doctor-filter-section">
            <span>Gender</span>
            <select name="gender" id="doctor-gender">
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        {listDoctors?.map((doctor: any, i) => <DoctorRow key={i} doctor={doctor} />)}
      </div>
      <div className="doctor-top-list">
        <div className="doctor-top-title">Top 5:</div>
        {
          doctors?.slice(0, 5).map(({ _id, name, avatar, email }: any) => (
            <div className="doctor-top-content" key={_id}>
              <div className="doctor-content-avatar">
                <img src={avatar} alt={name} />
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
