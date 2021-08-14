import { getRequest } from '../config/axios.request';
import { IDoctor } from '../types/doctor';

const getDoctor = (doctorId: string): Promise<IDoctor> => getRequest(`doctors/${doctorId}`);

const getDoctors = (): Promise<IDoctor[]> => getRequest('doctors');

export default {
  getDoctor,
  getDoctors,
};
