import { v1 as uuid } from 'uuid';
import crypto from 'crypto';
import appConfig from './app.config';

const partnerCode = 'MOMO7OU020210728';
const accessKey = 'D8h4XhEdfdGdMQ7p';
const secreteKey = 'oimuCa81icwpHAgnw44iHKiiK8sSX5dM';
const momoEndpoint = 'https://test-payment.momo.vn/gw_payment/transactionProcessor';
const orderInfo = 'pay with Momo';
const requestType = 'captureMoMoWallet';
const notifyUrl = `${appConfig.backendUrl}/payment/momo`;
const returnUrl = `${appConfig.appUrl}/app/appointment`;

const momoRequest = async (
  appointmentName: string,
  patientId: string,
  patientName: string,
  startOfAppointment: string,
  endOfAppointment: string,
  doctorId: string,
  doctorName: string,
  amount: string,
) => {
  const orderId = uuid();
  const extraData = [appointmentName, patientId, patientName, startOfAppointment, endOfAppointment, doctorId, doctorName].join(',');

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

  const requestOpts = {
    method: 'POST',
    body: JSON.stringify({ ...body, signature }),
  };

  const data = await (await fetch(momoEndpoint, requestOpts as any)).json();
  return data;
};

export { momoRequest };
