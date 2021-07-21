import './style.scss'
import { Table, Row, Divider, Col, Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const { Column } = Table;
const Payment = () => {
  const [count, setCount] = useState(1);

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
        </Space>
      ,
      total: <p>${count * 50}</p>,
    }
  ];
  return (
    <div className="payment-form">

      <div className="table-payment">
        <Table dataSource={data} >
          <Column title="Counselling" dataIndex="counselling" key="counselling" />
          <Column title="Price" dataIndex="price" key="price" />
          <Column title="Quantity" dataIndex="quantity" key="quantity" />
          <Column title="Total" dataIndex="total" key="total" />
        </Table>
      </div>
      <div className="order-sumary">
        <h2>Order Sumary</h2>
        <Divider style={{ marginTop: '15px' }} />

        <Row justify="space-between">
          <Col span={8}><h3>Item Total</h3></Col>
          <Col span={8} className="col-total" >$50</Col>
        </Row>
        <Row justify="space-between">
          <Col span={8}><h3> Total</h3></Col>
          <Col span={8} className="col-total" >${count * 50}</Col>
        </Row>
        <Divider style={{ marginTop: '15px' }} />
        <Button className="btn-payment">Purchase Now</Button>
        <Divider plain>or select other payment method</Divider>
        <Link to="">
          <img src="https://upload.wikimedia.org/wikipedia/vi/archive/f/fe/20201011055543%21MoMo_Logo.png" alt="momo" className="momo" />
        </Link>
      </div>
    </div>
  );
}

export default Payment;
