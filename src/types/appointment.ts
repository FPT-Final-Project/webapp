export interface IAppointment {
  _id: string
  name: string;
  startOfAppointment: number;
  endOfAppointment: number;
  patentId: string;
  doctorId: string;
  doctorName: string;
  status: string;
  roomId: string;
  isCanceled?: boolean;
  createdAt?: number;
  updatedAt?: number;
  isDeleted?: boolean;
}
