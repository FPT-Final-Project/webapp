import { AxiosResponse } from 'axios';
import { getRequest } from '../config/axios.request';

const getSchedulesToday = (doctorId: string): Promise<AxiosResponse<any>> => getRequest(`schedule/${doctorId}`);

export default {
  getSchedulesToday,
};
