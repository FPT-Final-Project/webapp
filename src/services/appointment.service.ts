import { getRequest } from '../config/axios.request';

const getAppointment = (appointmentId: string) => getRequest(`/appointment/${appointmentId}`);

const getAppointments = () => getRequest('/appointment');

export default {
  getAppointment,
  getAppointments,
};
