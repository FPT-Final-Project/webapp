import { AxiosResponse } from 'axios';
import { getRequest } from '../config/axios.request';

const getDoctor = (doctorId: string): Promise<AxiosResponse<any>> => getRequest(`doctors/${doctorId}/detail`);

const getDoctors = (): Promise<AxiosResponse<any>> => getRequest('doctors');

export default {
  getDoctor,
  getDoctors,
};
