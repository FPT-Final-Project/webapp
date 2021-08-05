import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import { useDispatch, useSelector, createStore } from 'react-redux';
import Search from 'antd/lib/input/Search';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IDoctor } from '../../../types/doctor';
import { IRootState } from '../../../stores/store';
import './styles.scss';
import doctorAction from '../../../stores/actions/doctor.action';
import scheduleAction from '../../../stores/actions/schedule.action';
import { ISchedule } from '../../../types/schedule';

const ListDoctors: React.FC = () => {
  const dispatch = useDispatch();
  const { user, doctors } = useSelector((state: IRootState) => ({
    user: state.authentication.user,
    doctors: state.doctor.doctors,
  }));
  const [listDoctors, setListDoctors] = useState(doctors);
  // const [statusSchedule, setStatusSchedule] = useState(false);
  const [listSchedule, setlistSchedule] = useState<ISchedule[] | undefined>();

  const getListSchedule = (doctorId: string) => {
    console.log(doctorId);
    setlistSchedule(scheduleAction.getSchedules(doctorId));

    // setlistSchedule(useSelector((state: IRootState) => state.schedule.schedules));
    // console.log(listSchedule);
    if (listSchedule) {
      for (let i = 0; i < listSchedule.length; i += 1) {
        return (
          <div className="doctor-schedule">
            <FontAwesomeIcon icon={faVideo} size="sm" />
            <span>{listSchedule[i].fromTime} - {listSchedule[i].toTime}</span>
          </div>
        );
      }
    }
    return (<></>);
  };

  useEffect(() => {
    if (user) {
      dispatch(doctorAction.getDoctors());
      setListDoctors(doctors);
      // if (doctors) {
      //   setStatusSchedule(true);
      // }
      // if (doctors) {
      //   // setlistSchedule(useSelector((state: IRootState) => state.schedule.schedules));
      // }
    }
  }, [doctors]);

  const DoctorRow = ({ _id, name, avatar }: IDoctor) => (
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
          <div className="doctor-card-schedules" />
          {_id ? getListSchedule(_id) : ''}
        </div>
        <div>
          <div style={{ fontWeight: 700 }}>Consultation Fee : 50$</div>
          <div>Costs Incurred: 5$</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="wrap-doctor-list">
      <div className="doctor-list-content">
        <div className="doctor-filter">
          <div className="doctor-filter-section">
            <span>Search Name:&nbsp;</span>
            <Search className="doctor-search" placeholder="Doctor name" />
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
        {listDoctors?.map((doctor) => DoctorRow(doctor))}
      </div>
      <div className="doctor-top-list">
        <div className="doctor-top-title">Top 5:</div>
        {
          listDoctors?.slice(0, 5).map(({ _id, name, avatar, email }) => (
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
