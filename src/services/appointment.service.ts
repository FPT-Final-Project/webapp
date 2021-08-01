import { getRequest } from '../config/axios.request';
import { IAppointment } from '../types/appointment';

const getAppointment = (appointmentId: string): Promise<IAppointment> => getRequest(`appointment/${appointmentId}`);

const getAppointments = (): Promise<IAppointment[]> => getRequest('appointment');

export default {
  getAppointment,
  getAppointments,
};
