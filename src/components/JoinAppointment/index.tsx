/* eslint-disable no-console */
import axios from 'axios';
import './style.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const JoinAppointment = () => {
  const userid = useState('1');
  const [statusButton, setStatusButton] = useState(false);
  useEffect(() => {
    async function getInfoAppointments() {
      try {
        const response = await axios.get('/info_appointment');
        const d = new Date();
        const n = d.getTime();
        if (response.data.timestart <= n <= response.data.timeend) {
          setStatusButton(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getInfoAppointments();
    console.log(statusButton);
  }, [statusButton]);
  return (
    <div>
      <Link
        onClick={(e) => ((!userid) ? e.preventDefault() : null)}
        to={{
          pathname: '/videochat',
          state: {
          },
        }}
      >
        {!statusButton ? <button className="joinappointment disable" type="submit" disabled>Join now</button> : <button className="joinappointment" type="submit">Join now</button> }
      </Link>
    </div>
  );
};

export default JoinAppointment;
