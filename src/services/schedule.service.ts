import { AxiosResponse } from 'axios';
import { getRequest } from '../config/axios.request';

const getSchedulesToday = (doctorId: string) => getRequest(`schedule/${doctorId}`);

export default {
  getSchedulesToday,
};
