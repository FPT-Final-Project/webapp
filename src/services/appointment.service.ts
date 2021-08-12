import { getRequest, postRequest } from '../config/axios.request';
import { IAppointment } from '../types/appointment';
import { IUser } from '../types/user';

const getAppointment = (appointmentId: string): Promise<IAppointment> => {
  return getRequest(`appointment/${appointmentId}`);
};

const getAppointments = (user: IUser): Promise<IAppointment[]> => getRequest('appointment');

const cancelAnAppointment = (user: IUser, appointmentId: string): Promise<any> => {
  return postRequest(`appointment/${appointmentId}/cancel`);
};

const makeAnAppointment = (
  user: IUser,
  name: any,
  startOfAppointment: any,
  endOfAppointment: any,
  doctorId: any,
  doctorName: any,
): Promise<any> => {
  return postRequest('appointment/create', { user, name, startOfAppointment, endOfAppointment, doctorId, doctorName });
};

export default {
  getAppointment,
  getAppointments,
  cancelAnAppointment,
  makeAnAppointment,
};
