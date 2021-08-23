import { getRequest, postRequest } from '../config/axios.request';
import { IAppointment } from '../types/appointment';

const getAppointment = (appointmentId: string): Promise<IAppointment> => {
  return getRequest(`appointment/${appointmentId}`);
};

const getAppointments = (): Promise<IAppointment[]> => getRequest('appointment');

const getTotalAppointments = () => getRequest('appointment/count/all');

const cancelAnAppointment = (appointmentId: string): Promise<any> => {
  return postRequest(`appointment/${appointmentId}/cancel`);
};

const makeAnAppointment = (
  patientId: string,
  patientName: string,
  name: string,
  startOfAppointment: number,
  endOfAppointment: number,
  doctorId: string,
  doctorName: string,
): Promise<any> => {
  return postRequest('appointment/create', { patientId, patientName, name, startOfAppointment, endOfAppointment, doctorId, doctorName });
};

const checkAppointment = (
  patientId: string,
  doctorId: string,
  startOfAppointment: number,
): Promise<{ isExisted: boolean }> => {
  return postRequest('appointment/check', { patientId, doctorId, startOfAppointment });
};

export default {
  getAppointment,
  getAppointments,
  cancelAnAppointment,
  makeAnAppointment,
  checkAppointment,
  getTotalAppointments,
};
