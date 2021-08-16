export interface IFeedback {
  _id: string
  appointmentId: string;
  rate: number;
  description: string;
  patientId: string;
  doctorId: string;
  createdAt?: number;
  updatedAt?: number;
}
