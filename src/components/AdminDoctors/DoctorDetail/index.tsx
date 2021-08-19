/* eslint-disable max-len */
import { VideoCameraOutlined } from '@ant-design/icons';
import { DatePicker, Input, Modal } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import appointmentService from '../../../services/appointment.service';
import { IRootState } from '../../../stores/store';
import openNotification from '../../../utils/notification';
import './style.scss';

interface Props {}

const DoctorDetail: React.FC<Props> = (props: any) => {
  // const doctorId = useParams<{ doctorId: string }>();
  const { user } = useSelector((state: IRootState) => ({
    user: state.authentication.user,
  }));
  const { location: { state: { doctor } } } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [nameAppointment, setNameAppointment] = useState('');
  const [date, _setDate] = useState(moment(new Date(), 'YYYY/MM/DD'));
  const [selectedTime, setSelectedTime] = useState('');
  const history = useHistory();

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

    if (user) {
      const { isExisted } = await appointmentService.checkAppointment(user._id, doctor._id, +startOfAppointment);
      if (isExisted) {
        openNotification('error', 'The time has booked by another.');
        setConfirmLoading(false);
        return;
      }
    }
    setTimeout(() => {
      setModalVisible(false);
      setConfirmLoading(false);
      history.push({
        pathname: '/app/payment',
        state: {
          roomName: nameAppointment,
          doctorId: doctor._id,
          doctorName: doctor.name,
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
  };

  const disableDate = (current: any) => {
    return current < moment().startOf('day');
  };

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
                {doctor.bookingTime && doctor.bookingTime.length > 0 ? (
                  doctor.bookingTime.map((time: string, i: number) => (
                    <div className="sche-time" key={i}>
                      <VideoCameraOutlined />
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
                {/* <div className="sche-time"><VideoCameraOutlined /> 08:00 - 09:00</div>
                <div className="sche-time"><VideoCameraOutlined /> 08:00 - 09:00</div>
                <div className="sche-time"><VideoCameraOutlined /> 08:00 - 09:00</div>
                <div className="sche-time"><VideoCameraOutlined /> 08:00 - 09:00</div> */}
              </div>
              <div className="schedule--right">
                <div className="sche-price">Consultation Fee : {doctor?.consultingFee || 'Unknown'} VND</div>
                <div className="sche-incur">Costs incurred   : 5$</div>
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
                <p><b>Doctor:</b>&nbsp;{doctor.name}</p>
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
          </div>
          <div className="contentDetail__information">
            <h2 className="detail--title">Information</h2>
            <p>Psychological psychotherapist, 22 years of experience in psychological counselling</p>
            <p>Age: 45</p>
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
