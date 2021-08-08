import { AxiosResponse } from 'axios';
import { getRequest, postRequest } from '../config/axios.request';
import { IUser } from '../types/user';

const getAppointment = (appointmentId: string): Promise<AxiosResponse<any>> => getRequest(`appointment/${appointmentId}`);

const getAppointments = (user: IUser): Promise<AxiosResponse<any>> => getRequest('appointment');

const cancelAnAppointment = (user: IUser, appointmentId: string): Promise<AxiosResponse<any>> => postRequest(`appointment/${appointmentId}/cancel`);

const makeAnAppointment = (user: IUser, name: any, startOfAppointment: any, endOfAppointment: any, doctorId: any, doctorName: any): Promise<AxiosResponse<any>> => postRequest('appointment/create');

export default {
  getAppointment,
  getAppointments,
  cancelAnAppointment,
  makeAnAppointment,
};
