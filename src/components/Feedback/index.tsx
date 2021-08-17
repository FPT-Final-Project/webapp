/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './style.scss';
import { Rate, Input, Button } from 'antd';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import feedbackAction from '../../stores/actions/feedback.action';
import { IRootState } from '../../stores/store';
import openNotification from '../../utils/notification';
import doctorAction from '../../stores/actions/doctor.action';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const { TextArea } = Input;

const Feedback: React.FC = () => {
  const [rate, setRate] = useState({ value: 1 });
  const [des, setDes] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation<any>();
  const { user } = useSelector((state: IRootState) => ({ user: state.authentication.user }));
  const { doctor } = useSelector((state: IRootState) => ({ doctor: state.doctor.doctor }));
  const [avaDoctor, setAvaDoctor] = useState<any>();
  const { appointmentId } = useParams<{ appointmentId: string }>();
  const handleChange = (value: any) => setRate({ value });

  useEffect(() => {
    if (location.state !== undefined && user?.role === 'patient') {
      if (location.state.doctorId) {
        dispatch<any>(doctorAction.getDoctor(location.state.doctorId)).then((res: any) => setAvaDoctor(res.avatar));
      }
    }
  }, []);

  const sendFeedback = () => {
    if (location.state !== undefined && user?.role === 'patient') {
      dispatch<any>(feedbackAction.createFeedback(appointmentId, rate.value, des, user._id, location.state.doctorId));
      dispatch<any>(doctorAction.getDoctor(''));
    } else {
      openNotification('error', 'Some thing wrong !');
    }
    setTimeout(() => {
      window.location.href = '/app/appointment';
    }, 3000);
  };

  const { value } = rate;

  return (
    <div className="wrap-feedback">
      <div className="banner-feedback">
        <div className="banner-feedback__h2">Feedback Form</div>
        <div className="banner-feedback__description">Give your honest opinion of what you think</div>
      </div>
      <div className="feedback-form">
        {!doctor ? (<div className="feedback-title">How satisfied are you overall with the support of your team Doctor's Psycare ?</div>)
          : (<div><div className="feedback-title">How satisfied are you overall with the support of this Doctor ?</div><div className="feedback-avatar">{avaDoctor ? <img src={avaDoctor} alt={doctor.name} /> : <img src="/doctorPsy.png" alt={doctor.name} />}</div></div>) }
        <Rate tooltips={desc} onChange={handleChange} value={value} style={{ fontSize: '30px' }} />
        <div className="feedback-text">
          <TextArea
            className="feedback-text-area"
            placeholder="Please tell us your reasons for giving this score status here..."
            rows={5}
            value={des}
            // eslint-disable-next-line no-shadow
            onChange={({ target: { value } }) => setDes(value)}
          />
        </div>
        <Button onClick={sendFeedback} className="btn-feedback">
          Send Feedback
        </Button>
      </div>
      <div className="wrap-button-direct">
        <div className="button-direct-form">
          <div className="button-rejoin">
            <a href={`/appointment/${appointmentId}/start`}>
              <Button>
                <span className="button-rejoin-text">
                Join again
                </span>
              </Button>
            </a>
          </div>
          <div className="button-redirect">
            <a href="/app/appointment">
              <Button type="primary">
                <span className="button-redirect-text">
                  Back to home screen
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="wrap-privacy-feedback">
        <div className="form-privacy-feedback">
          <img className="img-privacy-feedback" src="https://www.gstatic.com/meet/security_shield_356739b7c38934eec8fb0c8e93de8543.svg" alt="Your meeting is safe" />
          <div className="text-privacy-feedback">
            <div className="text1-privacy-feedback">
              Your meeting is safe
            </div>
            <div className="text2-privacy-feedback">
              No one can join the meeting unless the organizer invites or allows it
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
