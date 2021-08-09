/* eslint-disable max-len */
import './style.scss';
import {
  Table, Row, Divider, Col, Button, Space,
} from 'antd';
import { Link, useHistory, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { momoRequest } from '../../config/momo.config';
import { IRootState } from '../../stores/store';

const { Column } = Table;

const Payment: React.FC = () => {
  const [count, setCount] = useState(1);
  const user = useSelector((state: IRootState) => state.authentication.user);
  const location = useLocation<any>();
  const history = useHistory();
  const dispatch = useDispatch();

  if (!user) {
    return (
      <></>
    );
  }
  if (location.state.nameRoom === undefined) {
    history.push('doctor');
  }

  const data = [
    {
      key: '1',
      counselling: 'Treatment of depression',
      price: '$50',
      quantity:
        <Space align="center">
          <Button onClick={() => setCount(count - 1)}>-</Button>
          <p>{count}</p>
          <Button onClick={() => setCount(count + 1)}>+</Button>
        </Space>,
      total:
        <p>
          $
          {count * 50}
        </p>,
    },
  ];

  const handlePurchasing = async () => {
    const { payUrl } = await momoRequest(location.state.idSchedule, location.state.nameRoom, user._id, user.name, location.state.startOfAppointment.toString(), location.state.endOfAppointment.toString(), location.state.doctorId, location.state.doctorName, '50000');
    window.location.href = payUrl;
  };

  return (
    <div className="wrapper-payment">
      <div className="banner-payment">
        <div className="banner-payment__h2">Payment Form</div>
        <div className="banner-payment__description">Where to pay for the doctor's appointment</div>
      </div>
      <div className="payment-form">
        <div className="table-payment">
          <Table dataSource={data}>
            <Column title="Counselling" dataIndex="counselling" key="counselling" />
            <Column title="Price" dataIndex="price" key="price" />
            <Column title="Quantity" dataIndex="quantity" key="quantity" />
            <Column title="Total" dataIndex="total" key="total" />
          </Table>
        </div>
        <div className="order-sumary">
          <h2>Order Summary</h2>
          <Divider style={{ marginTop: '15px' }} />
          <Row justify="space-between">
            <Col span={8}><h3>Item Total</h3></Col>
            <Col span={8} className="col-total">$50</Col>
          </Row>
          <Row justify="space-between">
            <Col span={8}><h3> Total</h3></Col>
            <Col span={8} className="col-total">
            $
              {count * 50}
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
