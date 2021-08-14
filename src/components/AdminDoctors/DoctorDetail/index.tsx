/* eslint-disable max-len */
import { VideoCameraOutlined } from '@ant-design/icons';
import React from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';

interface Props {}

const DoctorDetail: React.FC<Props> = (props: any) => {
  const doctorId = useParams<{ doctorId: string }>();
  const { location: { state: { doctor } } } = props;
  return (
    <div>
      <div className="wrap-details">
        <div className="headerDetail">
          <div className="headerDetail__banner" />
          <div className="headerDetail__info">
            <div className="info-spreate area-image">
              {/* <div className="info--image" /> */}
              <img src={doctor.avatar || '/doctorPsy.png'} alt="avatar" className="info--image" />
            </div>
            <div className="info-spreate">
              <div className="info-spreate__title">{doctor.name || 'Sir'}</div>
              <div className="info-spreate__text">{doctor.major || "Master's Depression"}</div>
            </div>
            <div className="info-spreate">
              <div className="info-spreate__title">Email</div>
              <div className="info-spreate__text">{doctor.email}</div>
            </div>
            <div className="info-spreate">
              <div className="info-spreate__title">Contact</div>
              <div className="info-spreate__text">{doctor.phone || 'Unknown'}</div>
            </div>
          </div>

        </div>
        <div className="contentDetail">
          <div className="contentDetail__schedule">
            <h2 className="detail--title">Consultation Schedule</h2>
            <div className="contentDetail__schedule--wrap">
              <div className="schedule--left">
                <div className="sche-time"><VideoCameraOutlined /> 08:00 - 09:00</div>
                <div className="sche-time"><VideoCameraOutlined /> 08:00 - 09:00</div>
                <div className="sche-time"><VideoCameraOutlined /> 08:00 - 09:00</div>
                <div className="sche-time"><VideoCameraOutlined /> 08:00 - 09:00</div>
              </div>
              <div className="schedule--right">
                <div className="sche-price">Consulting price : 50$ </div>
                <div className="sche-incur">Costs incurred   : 5$</div>
              </div>
            </div>
          </div>
          <div className="contentDetail__information">
            <h2 className="detail--title">Information</h2>
            <p>Psychological psychotherapist, 22 years of experience in psychological counselling</p>
            <p>Age: 50</p>
          </div>
          <div className="contentDetail__introduce">
            <h2 className="detail--title">May I Introduce Myself?</h2>
            <p>{`Hi, my fullname is ${doctor.name}. I specialised in working with adolescents, adults and seniors. I'm passionate about helping people to become their best version of themselves, by focusing on a new perspective of self awareness and understanding of yourself and others. "If you can't change the problem, change the way you view it.`}</p>
          </div>
          <div className="contentDetail__specialise">
            <h2 className="detail--title">Specialised In</h2>
            <h4>{doctor.major || 'DEPRESSION'}</h4>
            <p>Depression can happen to everybody, adults, children and teenagers. Let me help you to find back to a life full of joy! "Above all, be the heroine of your life, not the victim"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
