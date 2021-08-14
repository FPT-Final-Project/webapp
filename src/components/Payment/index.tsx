import React from 'react';
import './style.scss';
import { Row, Divider, Col, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { momoRequest } from '../../config/momo.config';
import { IRootState } from '../../stores/store';

const Payment: React.FC = () => {
  const user = useSelector((state: IRootState) => state.authentication.user);
  const location = useLocation<any>();

  const {
    roomName,
    doctorId,
    doctorName,
    startOfAppointment,
    endOfAppointment,
    amount,
    date,
    time,
  } = location.state;

  if (!user) {
    return (
      <></>
    );
  }

  const handlePurchasing = async () => {
    const { payUrl } = await momoRequest(
      roomName,
      user._id,
      user.name,
      startOfAppointment,
      endOfAppointment,
      doctorId,
      doctorName,
      `${amount + 50000}`,
    );
    window.location.href = payUrl;
  };

  return (
    <div className="wrapper-payment">
      <div className="banner-payment">
        <div className="banner-payment__h2">Payment Form</div>
        <div className="banner-payment__description">Where to pay for the doctor's appointment</div>
      </div>
      <div className="payment-form">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <Divider style={{ marginTop: '18px' }} />
          <Row justify="space-between">
            <Col span={7}><h3>Name</h3></Col>
            <Col span={11} className="col-total">{roomName}</Col>
          </Row>
          <Row justify="space-between">
            <Col span={7}><h3>Doctor Name</h3></Col>
            <Col span={11} className="col-total">{doctorName}</Col>
          </Row>
          <Row justify="space-between">
            <Col span={7}><h3>Date</h3></Col>
            <Col span={11} className="col-total">{date}</Col>
          </Row>
          <Row justify="space-between">
            <Col span={7}><h3>Time</h3></Col>
            <Col span={11} className="col-total">{time}</Col>
          </Row>
          <Row justify="space-between">
            <Col span={7}><h3>Consulting Fee</h3></Col>
            <Col span={11} className="col-total">{amount.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</Col>
          </Row>
          <Row justify="space-between">
            <Col span={7}><h3>Fee</h3></Col>
            <Col span={11} className="col-total">{(50000).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</Col>
          </Row>
          <Row justify="space-between">
            <Col span={7}><h3> Total</h3></Col>
            <Col span={11} className="col-total">
              {(amount + 50000).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
            </Col>
          </Row>
          <Divider style={{ marginTop: '15px' }} />
          <Button className="btn-payment" onClick={() => handlePurchasing()}>Purchase Now</Button>
          <Divider plain>or select other payment method</Divider>
          <Link to="/#">
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/archive/f/fe/20201011055543%21MoMo_Logo.png"
              alt="momo"
              className="momo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
