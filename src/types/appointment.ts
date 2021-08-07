export interface IAppointment {
  _id: string
  name: string;
  startOfAppointment: number;
  endOfAppointment: number;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  status: string;
  isCanceled?: boolean;
  createdAt?: number;
  updatedAt?: number;
  isDeleted?: boolean;
}
