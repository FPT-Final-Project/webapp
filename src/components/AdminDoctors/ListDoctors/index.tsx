import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../../types/user';
import './styles.scss';

interface Props {}

const DoctorRow = ({ _id, name, picture }: IUser) => (
  <div className="doctor-card" key={_id}>
    <div className="doctor-card-left">
      <div className="doctor-card-avatar">
        <img src={picture} alt={name} />
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
          <div className="doctor-schedule">
            <FontAwesomeIcon icon={faVideo} size="sm" />
            <span>08:00 - 09:00</span>
          </div>
          <div className="doctor-schedule">
            <FontAwesomeIcon icon={faVideo} size="sm" />
            <span>09:30 - 10:30</span>
          </div>
          <div className="doctor-schedule">
            <FontAwesomeIcon icon={faVideo} size="sm" />
            <span>14:00 - 15:00</span>
          </div>
          <div className="doctor-schedule">
            <FontAwesomeIcon icon={faVideo} size="sm" />
            <span>15:30 - 16:30</span>
          </div>
        </div>
      </div>
      <div>
        <div style={{ fontWeight: 700 }}>Consultation Fee : 50$</div>
        <div>Costs Incurred: 5$</div>
      </div>
    </div>
  </div>
);

const ListDoctors: React.FC<Props> = () => {
  const [doctors, setDoctors] = useState([
    {
      _id: '1',
      name: 'Joe Black',
      role: 'doctor',
      email: 'maicels@psycare.com',
      phone: '0905619225',
      specialist: 'Anxious',
      picture: 'https://oh-doctor.com/wordpress/wp-content/themes/extention-child/asset/images/il-doctor-m.png',
    },
    {
      _id: '2',
      name: 'Dat',
      role: 'doctor',
      email: 'datlv@psycare.com',
      phone: '0905619225',
      specialist: 'Anxious',
      picture: 'https://oh-doctor.com/wordpress/wp-content/themes/extention-child/asset/images/il-doctor-m.png',
    },
    {
      _id: '3',
      name: 'Duy',
      role: 'doctor',
      email: 'duynht@psycare.com',
      phone: '0905619225',
      specialist: 'abc',
      picture: 'https://oh-doctor.com/wordpress/wp-content/themes/extention-child/asset/images/il-doctor-m.png',
    },
    {
      _id: '4',
      name: 'Long',
      role: 'doctor',
      email: 'longph@psycare.com',
      phone: '0905619225',
      specialist: 'xyz',
      picture: 'https://oh-doctor.com/wordpress/wp-content/themes/extention-child/asset/images/il-doctor-m.png',
    },
    {
      _id: '5',
      name: 'Long',
      role: 'doctor',
      email: 'longph@psycare.com',
      phone: '0905619225',
      specialist: 'xyz',
      picture: 'https://oh-doctor.com/wordpress/wp-content/themes/extention-child/asset/images/il-doctor-m.png',
    },
    {
      _id: '6',
      name: 'Long',
      role: 'doctor',
      email: 'longph@psycare.com',
      phone: '0905619225',
      specialist: 'xyz',
      picture: 'https://oh-doctor.com/wordpress/wp-content/themes/extention-child/asset/images/il-doctor-m.png',
    },
  ]);

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
        {doctors.map((doctor) => DoctorRow(doctor))}
      </div>
      <div className="doctor-top-list">
        <div className="doctor-top-title">Top 5:</div>
        {
          doctors.slice(0, 5).map(({ _id, name, picture, email }) => (
            <div className="doctor-top-content" key={_id}>
              <div className="doctor-content-avatar">
                <img src={picture} alt={name} />
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
