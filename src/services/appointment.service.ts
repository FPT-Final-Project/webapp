import { getRequest } from '../config/axios.request';
import { IAppointment } from '../types/appointment';
import { IUser } from '../types/user';

const getAppointment = (appointmentId: string): Promise<IAppointment> => getRequest(`appointment/${appointmentId}`);

const getAppointments = (user: IUser): Promise<IAppointment[]> => getRequest('appointment');

export default {
  getAppointment,
  getAppointments,
};
