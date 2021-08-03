import { getRequest, postRequest } from '../config/axios.request';
import { IAppointment } from '../types/appointment';
import { IUser } from '../types/user';

const getAppointment = (appointmentId: string): Promise<IAppointment> => getRequest(`appointment/${appointmentId}`);

const getAppointments = (user: IUser): Promise<IAppointment[]> => getRequest('appointment');

const cancelAnAppointment = (user: IUser, appointmentId: string): Promise<IAppointment[]> => postRequest(`appointment/${appointmentId}/cancel`);

const makeAnAppointment = (user: IUser, name: any, startOfAppointment: any, endOfAppointment: any, doctorId: any, doctorName: any): Promise<IAppointment[]> => postRequest('appointment/create');

export default {
  getAppointment,
  getAppointments,
  cancelAnAppointment,
  makeAnAppointment,
};
