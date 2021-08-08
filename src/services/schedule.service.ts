import { getRequest, postRequest } from '../config/axios.request';

const getSchedulesToday = (doctorId: string) => getRequest(`schedule/${doctorId}`);

const updateSchedule = (idSchedule: string) => postRequest(`schedule/${idSchedule}`);

export default {
  getSchedulesToday, updateSchedule,
};
