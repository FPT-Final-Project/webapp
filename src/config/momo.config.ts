import { v1 as uuid } from 'uuid';
import crypto from 'crypto';
import axios from 'axios';
import config from './config';

const partnerCode = 'MOMO7OU020210728';
const accessKey = 'D8h4XhEdfdGdMQ7p';
const secreteKey = 'oimuCa81icwpHAgnw44iHKiiK8sSX5dM';
const momoEndpoint = 'https://test-payment.momo.vn/gw_payment/transactionProcessor';
const orderInfo = 'pay with Momo';
const requestType = 'captureMoMoWallet';
const notifyUrl = 'https://psycare-be.herokuapp.com/v1/payment/momo';
const returnUrl = `${config.appUrl}app/dashboard`;

const momoRequest = async (
  appointmentId: string,
  appointmentName: string,
  patientId: string,
  patientName: string,
  doctorId: string,
  doctorName: string,
  amount: string,
) => {
  const orderId = uuid();
  const extraData = [appointmentId, appointmentName, patientId, patientName, doctorId, doctorName].join(',');

  const body = {
    accessKey,
    requestId: uuid(),
    requestType,
    partnerCode,
    amount,
    returnUrl,
    notifyUrl,
    orderId,
    orderInfo,
    extraData,
  };

  // eslint-disable-next-line max-len
  const rawSignature = `partnerCode=${partnerCode}&accessKey=${accessKey}&requestId=${body.requestId}&amount=${amount}&orderId=${orderId}&orderInfo=${orderInfo}&returnUrl=${returnUrl}&notifyUrl=${notifyUrl}&extraData=${extraData}`;

  const signature = crypto.createHmac('sha256', secreteKey)
    .update(rawSignature)
    .digest('hex');
  console.log('Payment Data : ', JSON.stringify({ ...body, signature }));
  axios.post(momoEndpoint, { ...body, signature })
    .then((response) => console.log('Data : ', response.data))
    .catch((error) => console.log('Error: ', error));
};

export { momoRequest };
