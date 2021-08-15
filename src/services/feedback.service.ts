import { postRequest } from '../config/axios.request';

const createFeedback = (appointmentId: any, rate: any, description: any, patientId: any, doctorId: any) => postRequest('feedback/create', { appointmentId, rate, description, patientId, doctorId }) as any;

export default {
  createFeedback,
};
